import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../characters/character';
import { FormsModule } from '@angular/forms';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterService } from '../services/character.service'



@Component({
  selector: 'app-scenery-editor',
  templateUrl: './scenery-editor.component.html',
  styleUrls: ['./scenery-editor.component.scss']
})
export class SceneryEditorComponent implements OnInit {
  @Input() character:Character;

  constructor() { }

  positionTopUp() : void {
    this.character.positionTop=this.character.positionTop+5;
  }

  ngOnInit(): void {
  }

}
