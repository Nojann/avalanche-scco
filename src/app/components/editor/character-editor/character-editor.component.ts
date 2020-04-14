import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../../models/character.model';
import { CharacterService } from '../../../services/character.service';
import { SceneryService } from 'src/app/services/scenery.service';

/**
 * Editor Character Component allows to edit Character data.
 * The type of character data is {@link Character}
 * 
 * {@link Character} is included in {@link Scenery}
 */

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  styleUrls: ['./character-editor.component.scss']
})
export class CharacterEditorComponent implements OnInit {
  @Input() character: Character;

  constructor(private _characterService: CharacterService, private _sceneryService: SceneryService) {

  }

  ngOnInit(): void {
    this._characterService.ngOnInit();
  }

  getCharacters(): Character[] {
    let characters: Character[];
    let id: number = 1;

    this._sceneryService.getCurrentId().subscribe(
        (currentId) => currentId ?
          id = currentId.valueOf()
          : console.log('Waiting id...')
        );

    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      characters = sceneries[id].characters.filter(
        (character) => character !== undefined)
      : console.log('.')
      );

    return characters;
}


  positionTopUp(): void {
    this._characterService.setPositionTop(1);
  }

  positionTopDown(): void {
    this._characterService.setPositionTop(-1);
  }

  positionLeftLeft(): void {
    this._characterService.setPositionLeft(1);
  }

  positionLeftRight(): void {
    this._characterService.setPositionLeft(-1);
  }

  widthUp(): void {
    this._characterService.setWidth(-1);
  }

  widthDown(): void {
    this._characterService.setWidth(1);
  }

  imageNameChange(imageName: string): void{
    this._characterService.setImageName(imageName);
  }

  idChange(id: number){
    console.log('id Change: ' + id);
    this._characterService.setCurrentId(id);
  }

  rotateLeft(): void {
    this._characterService.setRotate(-1);
  }

  rotateRight(): void {
    this._characterService.setRotate(1);
  }

  flip(): void {
    this._characterService.setScaleX();
  }

}
