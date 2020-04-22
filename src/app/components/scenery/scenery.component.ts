import { Component, OnInit, Input, Injectable } from '@angular/core';
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
  @Input() id: number;

  constructor(private _sceneryService: SceneryService, private _gameService: GameService) { }

  ngOnInit(): void {
    setTimeout(() => this.getScenery(), 1000);
  }

  getScenery(): Scenery {
        let scenery: Scenery;

        this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      scenery = sceneries[this.id]
      : scenery
    );

        return scenery;
  }

  characterClicked(): void {
    this._gameService.characterClicked = true;
  }
}
