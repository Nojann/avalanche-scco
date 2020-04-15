import { Component, OnInit } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';
import { Scenery } from 'src/app/models/scenery.model';
import { Story } from 'src/app/models/story.model';
import { GameService } from 'src/app/services/game.service';

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

  constructor(private _sceneryService: SceneryService, private _gameService: GameService) {
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

  getOption(): number {
    return this.stories[this.currentId].options[0];
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
    this.currentId++;
  }

  /*getGame(): Scenery {
    let game: Scenery;
    let id: number = 1;

    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ?
      id = currentId.valueOf()
      : console.log('Waiting game...')
    );

    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      game = sceneries[id]
      : console.log('.')
    );

    return game;
  }*/

  /*setIndex(): void {
    console.log('setIndex()');

    let id: number = 1;

    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ?
      id = currentId.valueOf()+1
      : console.log('Waiting scenery...')
    );

    this._sceneryService.setCurrentId(id);
  }*/

  characterClickedOff(): void {
    this._gameService.characterClicked = false;
  }

  /**
   * Is used to display or not the {@link CharacterFeaturesComponent}, {@link RiskPerceptionComponent}.
   */
  characterClicked(): boolean {
    return this._gameService.characterClicked;
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
      options: null,
      components: [],
      interactions: {
        nextOption: null,
        nextButtonText: null
      }
    }
  ];
    return stories;
  }
}
