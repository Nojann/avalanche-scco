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
  nextStory: boolean;

  _componentDisplay: boolean;

  constructor(private _sceneryService: SceneryService, private _gameService: GameService, private _choiceTaskService: ChoiceTaskService) {
    this.stories = this.initStories();
    this.currentId = 0;
    this.nextStory = false;
    this._componentDisplay = false;
}

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
  }

  get componentDisplay(): boolean {
    if (this._gameService.characterClicked) {
      this._componentDisplay = true;
    }
    return this._componentDisplay;
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

  /**
   * Evaluate the conditions to go to next index.
   * @param component
   */
  clickToNext(component: string) {

    const nextOption = this.stories[this.currentId].interactions.nextOption;

    if (nextOption === 'elementClicked' && component === 'scenery' && this._gameService.characterClicked) {
      this.nextStory = true;
    } else if ((nextOption === 'button' || nextOption === 'buttonActived') && component === 'button') {
      this.nextStory = true;
    } else if (nextOption === 'button' && component === 'choice-task') {
      this.nextStory = true;
    }

    if (this.nextStory) {
      this.nextIndex();
    }
  }

  /**
   * Change index by incrementation or by branching, integrate the narrative branching.
   * @param component
   */
  nextIndex(): void {
    const choiceList = this._choiceTaskService.choiceList;

    if (this.nextStory === true) {
      if (this.getIdByName('corniche') === this.currentId && choiceList.indexOf('Attendre') !== -1) {
        this.currentId = this.getIdByName('happyEnd');
      } else {
        this.currentId++;
        this.nextStory = false;
      }
    }

    this._componentDisplay = false;
    this._gameService.characterClicked = false;
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

  dialogEndClicked(): boolean {
    return this._gameService.dialogEndClicked;
  }

  initStories(): Story[] {
    const stories: Story[] = [
      {
      name: null,
      type: 'Scenery',
      options: [0],
      components: ['dialog', 'user-form'],
      interactions: {
        nextOption: 'button',
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
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [3],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: ''
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [4],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Découvrir le souvenir'
      }
    },
    {
      name: null,
      type: 'Video',
      options: [5],
      components: [],
      interactions: {
        nextOption: null,
        nextButtonText: null
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [5],
      components: ['dialog', 'survey'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [6],
      components: ['dialog'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Poursuivre'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [7],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [8],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [9],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [10],
      components: ['dialog', 'character-features', 'risk-perception'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [11],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: null
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [12, ["Renoncer", "Ne pas renoncer"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [13],
      components: ['dialog'],
      interactions: {
        nextOption: 'elementClicked',
        nextButtonText: null
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [14, ["Avec vitesse", "Avec prudence"]],
      components: ['dialog', 'choice-task'],
      interactions: {
        nextOption: 'button',
        nextButtonText: null
      }
    },
    {
      name: 'corniche',
      type: 'Scenery',
      options: [15, ["Attendre", "Tracer"]],
      components: ['dialog', 'choice-task'],
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
      name: null,
      type: 'Scenery',
      options: [17],
      components: ['dialog'],
      interactions: {
        nextOption: 'button',
        nextButtonText: 'Continuer'
      }
    },
    {
      name: null,
      type: 'Scenery',
      options: [18],
      components: ['dialog'],
      interactions: {
        nextOption: 'buttonActived',
        nextButtonText: 'Se faire emporter'
      }
    },
    {
      name: 'end',
      type: 'Scenery',
      options: [19],
      components: ['dialog', 'end'],
      interactions: {
        nextOption: 'button',
        nextButtonText: null
      }
    },
    {
      name: 'happyEnd',
      type: 'Scenery',
      options: [20],
      components: ['dialog', 'end'],
      interactions: {
        nextOption: 'button',
        nextButtonText: null
      }
    }
  ];
    return stories;
  }
}
