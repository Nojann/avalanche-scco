import { Injectable } from '@angular/core';
import { CharacterFeatures } from '../models/character-features.model';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersFeaturesService {

  _charactersFeatures: CharacterFeatures[];
  _familiarity: number;

  constructor(private userData: UserDataService)
  {
    this._charactersFeatures = [null, null, null, null];
    this._familiarity = this.randomFamiliarity();
  }

  InitCharactersFeatures() {
    console.log("InitCharactersFeatures");
    for (let index = 0; index < 4; index++) {
      this._charactersFeatures[index] = this.InitCharacterFeatures(index);
    }
    console.log(this._charactersFeatures);
  }

  InitCharacterFeatures(id: number): CharacterFeatures {
    return {
      characterId: id,
      familiarity: this._familiarity + this.random5(),
      technicalLevel: this.random(),
      backcountryExperience: this.random(),
      physicalCondition: this.random()
    };
  }

  random(): number {
    const minimum = 30;
    const interval = 40;
    return minimum + Math.floor(Math.random() * Math.floor(interval));
  }

  random5(): number {
    const random = Math.random();
    const random5 = Math.floor(Math.random() * 5);
    return random > 0.5 ? random5 : -random5 ;
  }

  randomFamiliarity(): number {
    const large = 85;
    const low = 10;
    const familiarity = (Math.random() > 0.5) ? large : low;
    this.userData.familiarity = familiarity === large ? true : false;
    return familiarity;
  }

  getFamiliarity(id: number): number {
    return this._charactersFeatures[id].familiarity;
  }

  getTechnicalLevel(id: number): number {
    return this._charactersFeatures[id].technicalLevel;
  }

  getBackcountryExperience(id: number): number {
    return this._charactersFeatures[id].backcountryExperience;
  }

  getPhysicalCondition(id: number): number {
    return this._charactersFeatures[id].physicalCondition;
  }

}
