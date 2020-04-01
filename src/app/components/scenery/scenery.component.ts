import { Component, OnInit, Input } from '@angular/core';
import { Scenery } from '../../models/scenery.model';
import { SceneryService } from '../../services/scenery.service';

@Component({
  selector: 'app-scenery',
  templateUrl: './scenery.component.html',
  styleUrls: ['./scenery.component.scss']
})
export class SceneryComponent implements OnInit {
  //@Input('index') index : number;

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
    setTimeout(() => this.getScenery(), 1000);
  }

  getScenery() : Scenery{
        let scenery : Scenery;
        let id : number = 1;
    
    //(!this.index) ?
      this._sceneryService.getCurrentId().subscribe(
        (currentId) => currentId ? 
          id = currentId.valueOf()
          : console.log("Waiting scenery...")
      )
    //: id=this.index
      
    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      scenery = sceneries[id]
      : console.log(".")
    );
    
    return scenery;
  }

}
