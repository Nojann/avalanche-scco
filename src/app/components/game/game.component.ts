import { Component, OnInit } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';
import { Story } from 'src/app/models/story.model';
import { GameService } from 'src/app/services/game.service';
import { ChoiceTaskService } from '../../services/choice-task.service';

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

  constructor(private _sceneryService: SceneryService, private _gameService: GameService, private _choiceTaskService: ChoiceTaskService) {
    this.stories = this.initStories();
    this.currentId = 0;
}

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
    //setTimeout(() => this.getGame(), 100);
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

  getNextOption(): string{
    const nextOption = this.stories[this.currentId].interactions.nextOption;

    if (nextOption === 'elementClicked') {
      this.nextIndex();
      this.characterClickedOff();
    }

    return nextOption;
  }

  getNextButtonText(): string {
    return this.stories[this.currentId].interactions.nextButtonText;
  }

  nextIndex(): void {
    //TODO : à refaire !!

    let choiceList = this._choiceTaskService.choiceList;
    console.log("lenght:",choiceList.length);
    console.log("search:",choiceList.indexOf('Attendre'))
    if(choiceList.length === 3 && choiceList.indexOf('Attendre') != -1){
      this.currentId = 21;
    }
    else {
      this.currentId++;
    }

  }

  setIndex(id: number) {
    this.currentId = id;
  }


  characterClickedOff(): void {
    this._gameService.characterClicked = false;
  }

  characterClickedOn(): void {
    this._gameService.characterClicked = true;
  }

  /**
   * Is used to display or not the {@link CharacterFeaturesComponent}, {@link RiskPerceptionComponent}.
   */
  characterClicked(): boolean {
    return this._gameService.characterClicked;
  }

  dialogEndClicked(): boolean {
    return this._gameService.dialogEndClicked;
  }

  initStories(): Story[]{
    const stories: Story[] = [
      {
      type: 'Scenery',
      options: [0],
      components: ['dialog', 'user-form'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Commencer l\'aventure',
      }
    },
    {
      type: 'Scenery',
      options: [1],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      type: 'Scenery',
      options: [2],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      type: 'Scenery',
      options: [3],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      type: 'Scenery',
      options: [4],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Découvrir le souvenir'
      }
    },
    {
      type: 'Video',
      options: [5],
      components: [],
      interactions: {
        nextOption: null,
        nextButtonText: null
      }
    },
    {
      type: 'Scenery',
      options: [5],
      components: ['dialog', 'survey'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      type: 'Scenery',
      options: [6],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      type: 'Scenery',
      options: [7],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [8],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [9],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [10],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [11],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: null
      }
    },
    {
      type: 'Scenery',
      options: [12, ["Renoncer", "Ne pas renoncer"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [13],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: null
      }
    },
    {
      type: 'Scenery',
      options: [14, ["Avec vitesse", "Avec prudence"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: "S'élancer"
      }
    },
    {
      type: 'Scenery',
      options: [15, ["Attendre", "Tracer"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [16],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [17],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [18],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [19],
      components: ['dialog', 'end'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      type: 'Scenery',
      options: [20],
      components: ['dialog', 'end'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    }
  ];
    return stories;
  }
}
