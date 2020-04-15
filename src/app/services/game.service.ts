import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _characterClicked : boolean = false;

  constructor() { }

  set characterClicked(state: boolean){
    this._characterClicked = state;
  }

  get characterClicked(){
    return this._characterClicked;
  }


}
