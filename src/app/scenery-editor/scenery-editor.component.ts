import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Character } from '../model/character';
import { CharacterService } from '../services/character.service'


@Component({
  selector: 'app-scenery-editor',
  templateUrl: './scenery-editor.component.html',
  styleUrls: ['./scenery-editor.component.scss']
})
export class SceneryEditorComponent implements OnInit {
  @Input() character:Character;

  public character1;

  constructor(private _characterService: CharacterService) { 

  }

  ngOnInit(): void {
    this.character1 = this._characterService.getCharacter();
  }

  positionTopUp() : void {
    this._characterService.setPositionTop(1);
  }

  positionTopDown() : void {
    this._characterService.setPositionTop(-1);
  }
  
  positionLeftLeft() : void {
    this._characterService.setPositionLeft(1);
  }

  positionLeftRight() : void {
    this._characterService.setPositionLeft(-1);
  }

  widthUp() : void {
    this._characterService.setWidth(-1);
  }

  widthDown() : void {
    this._characterService.setWidth(1);
  }






  

}
