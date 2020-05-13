import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _characterClicked: boolean;
  _characterClickedId: number;
  _dialogEndClicked: boolean;
  _formConsent: boolean;
  _formFilled: boolean;


  constructor() {
    this._characterClicked = false;
    this._dialogEndClicked = false;
    this._formConsent = false;
    this._formFilled = false;
  }

  setCharacterClicked(state: boolean, id: number) {
    this._characterClickedId = id;
    this._characterClicked = state;
  }

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

  set formConsent(state: boolean) {
    this._formConsent = state;
  }

  get formConsent(): boolean {
    return this._formConsent;
  }

  set formFilled(state: boolean) {
    this._formFilled = state;
  }

  get formFilled() {
    return this._formFilled;
  }
}
