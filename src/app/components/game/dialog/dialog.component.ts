import { Component, OnInit } from '@angular/core';
import { Scenery } from 'src/app/models/scenery.model';
import { SceneryService } from 'src/app/services/scenery.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private _sceneryService: SceneryService) { }

  ngOnInit(): void {
  }

  getDialog() : String[]{
    let dialog : String[];
    let id : number = 1;
    
    this._sceneryService.getCurrentId().subscribe(
      (currentId) => currentId ? 
      id = currentId.valueOf()
      : console.log("Waiting scenery...")
    );
    
    this._sceneryService.getSceneries().subscribe(
      (sceneries) => sceneries ?
      dialog = sceneries[id].dialog
      : console.log(".")
    );

  return dialog; 
  }

}
