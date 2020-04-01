import { Component, OnInit } from '@angular/core';
import { SceneryService } from 'src/app/services/scenery.service';
import { Scenery } from 'src/app/models/scenery.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private _sceneryService: SceneryService, private _gameService: GameService) { }

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

  characterClickedOff() : void {
    this._gameService.characterClicked=false;
  }

  characterClicked() : boolean {
    return this._gameService.characterClicked;
  }
}
