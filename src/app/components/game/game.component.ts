import { Component, OnInit } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';
import { Story } from 'src/app/models/story.model';
import { GameService } from 'src/app/services/game.service';
import { ChoiceTaskService } from '../../services/choice-task.service';
import { UserDataService } from '../../services/user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EndComponent } from './end/end.component';
import { Router } from '@angular/router';

import { HostListener } from "@angular/core";

/**
 * Game Component contains:
 *
 * {@link SceneryComponent}, {@link CharacterFeaturesComponent}, {@link Dialog}: to display game's information,
 *
 * {@link RiskPerceptionComponent}: to get user behaviour,
 *
 * internal methods to interact with user.
 */


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  stories: Story[];
  currentId: number;
  nextStory: boolean;
  experimentModality: number;

  screenHeight: number;
  screenWidth: number;
  _screenError: boolean;
  _screenErrorClick: boolean;

  _componentDisplay: boolean;

  constructor(private _sceneryService: SceneryService, private _gameService: GameService,
              private _choiceTaskService: ChoiceTaskService, private userData: UserDataService,
              public _dialog: MatDialog,
              private _router: Router) {
    this.stories = this.initStories();
    this.currentId = 0;
    this.nextStory = false;
    this._componentDisplay = false;
    this._screenError = false;
    this._screenErrorClick = false;
    this.onResize();

    this.randomExperimentModality();
}

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;

      if (this.screenHeight < 768 && !this._screenErrorClick) {
        this._screenError = true;
      } else if (this.screenWidth < 1366 && !this._screenErrorClick) {
        this._screenError = true;
      } else {
        this._screenError = false;
      }
  }

  get screenError() {
    return this._screenError;
  }

  setScreenErrorClick() {
    this._screenError = false;
    this._screenErrorClick = true;
  }

  get componentDisplay(): boolean {
    if (this._gameService.characterClicked) {
      this._componentDisplay = true;
    }
    return this._componentDisplay;
  }

  get componentDisplay_formFilled(): boolean {
    if (this._gameService._formFilled) {
      this._gameService._formFilled = true;
    }
    return this._gameService._formFilled;
  }

  getType(): any {
    return this.stories[this.currentId].type;
  }

  getComponents(): string[] {
    return this.stories[this.currentId].components;
  }

  getOption(id: number): number {
    return this.stories[this.currentId].options[id];
  }

  getNextOption(): string {
    return this.stories[this.currentId].interactions.nextOption;
  }

  getNextButtonText(): string {
    return this.stories[this.currentId].interactions.nextButtonText;
  }

  get name() {
    return this.stories[this.currentId].name;
  }

  /**
   * Evaluate the conditions to go to next index.
   * @param component
   */
  clickToNext(component: string) {

    const nextOption = this.stories[this.currentId].interactions.nextOption;

    if (nextOption === 'elementClicked' && component === 'scenery' && this._gameService.characterClicked) {
      this.nextStory = true;
    } else if ((nextOption === 'button' || nextOption === 'buttonActived' || nextOption === 'button_formFilled') 
    && component === 'button') {
      this.nextStory = true;
    } else if (nextOption === 'button' && component === 'choice-task') {
      this.nextStory = true;
    } else if (nextOption === 'videoEnd') {
      this.nextStory = true;
    }

    if (this.nextStory) {
      this.nextIndex();
      this._gameService.setCharacterClicked(false, -1);
    }
  }

  /**
   * Change index by incrementation or by branching, integrate the narrative branching.
   * @param component
   */
  nextIndex(): void {
    const choiceList = this._choiceTaskService.choiceList;

    if (this.nextStory === true) {
      if (this.getIdByName('souvenir') == this.currentId) {
        switch (this.experimentModality) {
          case 1: {
            this.currentId = this.getIdByName('videoAvalanche');
            break;
          }
          case 2: {
            this.currentId = this.getIdByName('videoNormal');
            break;
          }
          case 3: {
            this.currentId = this.getIdByName('sceneryAfterVideo');
            break;
          }
        }
      } else if (this.getIdByName('choice1') && choiceList.indexOf("Renoncer") !== -1){
        this.addUserData();
        this.currentId = this.getIdByName('happyEnd');
        //this._router.navigate(['/end']);
      } else if ((this.getIdByName('videoNormal') || this.getIdByName('videoAvalanche')) == this.currentId) {
        this.currentId = this.getIdByName('sceneryAfterVideo');
      } else if (this.getIdByName('corniche') == this.currentId && choiceList.indexOf("Discuter") == -1) {
        this.addUserData();
        this.currentId++;
      } else if (this.getIdByName('corniche') == this.currentId && choiceList.indexOf("Discuter") !== -1) {
        this.addUserData();
        this.currentId = this.getIdByName('happyEnd');
      } else {
        this.currentId++;
        this.nextStory = false;
      }
    }
    this._gameService._formFilled = false;
    this._componentDisplay = false;
  }

  /**
   * Initialize the experiment modality :
   * 1 : Video with avalanche
   * 2 : Video without avalanche
   * 3 : no video
   */
  randomExperimentModality() {
    this.experimentModality = Math.floor((Math.random() * 3) + 1);
    this.userData.videoType = this.experimentModality;
  }

  /**
   * Return a story position by this name.
   * @param name
   */
  getIdByName(name: string): number {
    return this.stories.indexOf(this.stories.filter(
      (story) => name === story.name)[0]);
  }

  setIndex(id: number): void {
    this.currentId = id;
  }

  getData(): void {
    var theJSON = JSON.stringify(this.userData.userData);
  }

  addUserData(): void {
    this.userData.addUserData();
  }

  dialogEndClicked(): boolean {
    if (this._gameService.dialogEndClicked) {
        this.clickToNext('videoEnd');
    }
    return this._gameService.dialogEndClicked;
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(EndComponent, {
      width: '1300px',
      height: '600px'
    });
  }

  initStories(): Story[] {
    const stories: Story[] = [
      {
      name: 'intro',
      type: 'Scenery',
      options: [0],
      components: ['dialog', 'user-form'],
      interactions: {
        nextOption: 'button_formFilled',
        nextButtonText: 'Commencer l\'aventure',
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [1],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [2],
      components: ['dialog', 'situation'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'OK'
      }
    },
    {
      name: 'souvenir',
      type: 'Scenery',
      options: [3],
      components: ['dialog'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Attendre'
      }
    },
    {
      name: 'videoAvalanche',
      type: 'Video',
      options: [4, 'YW5AcukbD3k'],
      components: [],
      interactions: {
        nextOption: 'videoEnd',
        nextButtonText: null
      }
    },
    {
      name: 'videoNormal',
      type: 'Video',
      options: [4, '4sY0W9s7puM'],
      components: [],
      interactions: {
        nextOption: 'videoEnd',
        nextButtonText: null
      }
    },
    {
      name: 'sceneryAfterVideo',
      type: 'Scenery',
      options: [4],
      components: ['dialog'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [5],
      components: ['dialog'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [6],
      components: ['dialog', 'character-features'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [7],
      components: ['dialog', 'character-features'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [8],
      components: ['dialog', 'character-features'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [9],
      components: ['dialog', 'character-features'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: 'evaluation',
      type: 'Scenery',
      options: [10],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button_formFilled',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: 'choice1',
      type: 'Scenery',
      options: [11, ["Renoncer", "Ne pas renoncer"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [12],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: null
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [13, ["Gauche", "Droite"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: null
      }
    },
    {
      name: 'corniche',
      type: 'Scenery',
      options: [14, ["S'engager", "Discuter"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: null
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [15],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [16],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: 'end',
      type: 'Scenery',
      options: [17],
      components: ['dialog'],
      interactions: {
        nextOption: 'button_end',
        nextButtonText: 'Message de fin'
      }
    },
    {
      name: 'happyEnd',
      type: 'Scenery',
      options: [18],
      components: ['dialog'],
      interactions: {
        nextOption: 'button_end',
        nextButtonText: 'Message de fin'
      }
    }
  ];
    return stories;
  }
}
