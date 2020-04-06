import { Component, OnInit, Input } from '@angular/core';
import { SceneryService } from '../../../services/scenery.service';

/**
 * Scenery Editor Component allow to edit Scenery data.
 * The type of Scenery data is {@link Scenery}
 */

@Component({
  selector: 'app-scenery-editor',
  templateUrl: './scenery-editor.component.html',
  styleUrls: ['./scenery-editor.component.scss']
})
export class SceneryEditorComponent implements OnInit {

  constructor(private _sceneryService: SceneryService) {

  }

  ngOnInit(): void {

  }

  idChange(id: number): void {
    this._sceneryService.setCurrentId(id);
  }

  imageNameChange(imageName: string): void {
    this._sceneryService.setBackground(imageName);
  }

  dialogChange(dialogID: number, dialog: string): void {
    this._sceneryService.setDialog(dialogID, dialog);
  }

}
