import { Component, OnInit } from '@angular/core';
import { CharactersFeaturesService } from 'src/app/services/characters-features.service';
import { GameService } from 'src/app/services/game.service';

/**
 * Display features discribing a character.
 * 
 * Features are randomly generated.
 */

@Component({
  selector: 'app-character-features',
  templateUrl: './character-features.component.html',
  styleUrls: ['./character-features.component.scss']
})
export class CharacterFeaturesComponent implements OnInit {

  constructor(private characterFeatures: CharactersFeaturesService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.characterFeatures.InitCharactersFeatures();
  }

  get familiarity(): number {
    return this.characterFeatures.getFamiliarity(this.gameService.characterClickedId);
  }

  get technicalLevel(): number {
    return this.characterFeatures.getTechnicalLevel(this.gameService.characterClickedId);
  }

  get backcountryExperience(): number {
    return this.characterFeatures.getBackcountryExperience(this.gameService.characterClickedId);
  }

  get physicalCondition(): number {
    return this.characterFeatures.getPhysicalCondition(this.gameService.characterClickedId);
  }

}
