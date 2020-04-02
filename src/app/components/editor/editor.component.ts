import { Component, OnInit } from '@angular/core';
import { SceneryService } from '../../services/scenery.service'
import { AuthGuardService } from '../../services/auth-guard.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  isAuth: boolean;

  constructor(private _sceneryService: SceneryService, private _authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    this._sceneryService.ngOnInit();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  save() : void {
    this._sceneryService.saveSceneryToServer();
  }

  getIsAuth(){
    return this.isAuth;
  }

}
