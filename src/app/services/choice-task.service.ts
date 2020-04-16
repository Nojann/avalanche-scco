import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiceTaskService {

  _choiceList: string[];

  constructor() {
    this._choiceList = [];
   }

  addChoice(choice: string) {
    console.log("Add choice :", choice);
    this._choiceList.push(choice);
    console.log("_choiceList : ", this._choiceList);
  }

  get choiceList() {
    return this._choiceList;
  }


}
