import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-features',
  templateUrl: './character-features.component.html',
  styleUrls: ['./character-features.component.scss']
})
export class CharacterFeaturesComponent implements OnInit {

  randomValue : number[] = [0,0,0,0];
  
  constructor() { }

  ngOnInit(): void {
  /*let i
  for (i; i<4; i++) {
      this.randomValue[i] = this.random();
   }*/

   this.randomValue[0] = this.random();
   this.randomValue[1] = this.random();
   this.randomValue[2] = this.random();
   this.randomValue[3] = this.random();
  }

  random() : number {
    return Math.floor(Math.random() * Math.floor(100));
  }

  getRandomValue(id : number) : number {
    return this.randomValue[id];
  }

}
