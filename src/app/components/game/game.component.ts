import { Component, OnInit } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';
import { Scenery } from 'src/app/models/scenery.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  //index : number = 1;

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
    setTimeout(() => this.getGame(), 100);
  }

  getGame() : Scenery{
    let game : Scenery;
    let id : number = 1;
    
    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ? 
      id = currentId.valueOf()
      : console.log("Waiting game...")
    );
    
    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      game = sceneries[id]
      : console.log(".")
    );

  return game; 
  }

  /*getIndex(): number{
    return this.index;
  }*/

  setIndex() : void {
    console.log("setIndex()");

    let id : number = 1;

    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ? 
      id = currentId.valueOf()+1
      : console.log("Waiting scenery...")
    );

    this._sceneryService.setCurrentId(id);
  }
}
