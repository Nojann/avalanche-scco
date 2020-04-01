import { Component, OnInit } from '@angular/core';
import { Scenery } from '../../../models/scenery.model';
import { SceneryService } from '../../../services/scenery.service';


@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
    setTimeout(() => this.getScenery(), 1000);
  }

  getScenery() : Scenery{
        let scenery : Scenery;
        let id : number = 1;
        
    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ? 
        id = currentId.valueOf()
        : console.log("Waiting scenery...")
    );
        
    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      scenery = sceneries[id]
      : console.log(".")
    );
    return scenery;
  }

}
