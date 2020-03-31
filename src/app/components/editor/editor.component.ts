import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { SceneryService } from '../../services/scenery.service'


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private _characterService: CharacterService, private _sceneryService: SceneryService) { }

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
  }

  save() : void {
    this._sceneryService.saveSceneryToServer(
      this._characterService.getCharactersArray());
  }

}
