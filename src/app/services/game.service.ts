import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _characterClicked: boolean;
  _dialogEndClicked: boolean;

  constructor() {
    this._characterClicked = false;
    this._dialogEndClicked = false;
  }

  set characterClicked(state: boolean) {
    this._characterClicked = state;
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
