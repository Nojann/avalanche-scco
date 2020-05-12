import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _characterClicked: boolean;
  _characterClickedId: number;
  _dialogEndClicked: boolean;

  constructor() {
    this._characterClicked = false;
    this._dialogEndClicked = false;
  }

  setCharacterClicked(state: boolean, id: number) {
    this._characterClickedId = id;
    this._characterClicked = state;
  }

  /*getcharacterClickedId(): Observable<number> {
    console.log("characterClickedId Obs", of(this._characterClickedId));
    return of(this._characterClickedId);
  }*/

  get characterClickedId(): number {
    return this._characterClickedId;
  }

  get characterClicked() {
    return this._characterClicked;
  }

  set dialogEndClicked(state: boolean) {
    this._dialogEndClicked = state;
  }

  get dialogEndClicked() {
    return this._dialogEndClicked;
  }

}
