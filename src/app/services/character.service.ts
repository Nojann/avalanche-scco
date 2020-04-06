import { Injectable, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { SceneryService } from './scenery.service';

/**
 * Character Service manage {@link Character} data.
 */

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit {

  characters: Character[];
  // Current id is the id selected to set and get Character data in Character[].
  currentId: number = 1;

  constructor(private _sceneryService: SceneryService) {}

  ngOnInit(): void {
    setTimeout(() => this.initCharacters(), 3000);
  }

  initCharacters(): void {
    let id: number = 1;

    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ?
      id = currentId.valueOf()
      : console.log('Waiting initCharacters() id')
    );

    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      this.characters = sceneries[id].characters
      : console.log('Waiting initCharacters()')
    );
  }

  setCurrentId(id: number): void {
    this.currentId = id;
  }

  setPositionTop(positionTopIncrement: number): void {
    // TODO : résoudre comportement
    this.initCharacters();
    this.characters[this.currentId].positionTop -= positionTopIncrement;
  }

  setPositionLeft(positionLeftIncrement: number): void {
    this.initCharacters();
    this.characters[this.currentId].positionLeft -= positionLeftIncrement;
  }

  setImageName(imageName: string): void {
    this.initCharacters();
    this.characters[this.currentId].imageName = imageName;
  }

  setWidth(widthIncrement: number): void {
    this.initCharacters();
    this.characters[this.currentId].width -= widthIncrement;
  }

}

