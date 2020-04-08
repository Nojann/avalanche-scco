import { Component, OnInit, Input } from '@angular/core';
import { Scenery } from '../../models/scenery.model';
import { SceneryService } from '../../services/scenery.service';
import { GameService } from 'src/app/services/game.service';

/**
 * Scenery Component displays images depending a {@link Scenery} data.
 */

@Component({
  selector: 'app-scenery',
  templateUrl: './scenery.component.html',
  styleUrls: ['./scenery.component.scss']
})
export class SceneryComponent implements OnInit {
  constructor(private _sceneryService: SceneryService, private _gameService: GameService) { }

  ngOnInit(): void {
    setTimeout(() => this.getScenery(), 1000);
  }

  getScenery(): Scenery {
        let scenery: Scenery;
        let id: number = 0;

        this._sceneryService.getCurrentId().subscribe(
        (currentId) => currentId ? 
          id = currentId.valueOf()
          : console.log('Waiting scenery...')
        );

        this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      scenery = sceneries[id]
      : console.log('.')
    );

        return scenery;
  }

  characterClicked(): void {
    this._gameService.characterClicked = true;
  }
}
