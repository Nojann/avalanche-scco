import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  uri = 'http://localhost:4000/userData';
  _userData: UserData;

  constructor(private http: HttpClient) {
    this._userData = {
      gender: -1,
      age: -1,
      skiLevel: -1,
      skiExperience: -1,
      skiFreeRide: -1,
      skiFreeRideFreq: -1,
      videoType: -1,
      familiarity: null,
      finalEvaluation: -1,
      choice1: null,
      choice2: null,
      choice3: null,
      opt1: -1,
      opt2: -1,
      opt3: ''
    };
  }


  addUserData() {
    console.log(this.userData);
    this.http.post(`${this.uri}/add`, this.userData)
        .subscribe(res => console.log('Done'));
  }

  set gender(value: number) {
    this.userData.gender = value;
  }

  set age(value: number) {
    this.userData.age = value;
  }

  set skiLevel(value: number) {
    this.userData.skiLevel = value;
  }

  set skiExperience(value: number) {
    this.userData.skiExperience = value;
  }

  set skiFreeRide(value: number) {
    this.userData.skiFreeRide = value;
  }

  set skiFreeRideFreq(value: number) {
    this.userData.skiFreeRideFreq = value;
  }

  set videoType(value: number) {
    this.userData.videoType = value;
  }

  set familiarity(value: boolean) {
    this.userData.familiarity = value;
  }

  set choice1(value: boolean) {
    this.userData.choice1 = value;
  }

  set choice2(value: boolean) {
    this.userData.choice2 = value;
  }

  set choice3(value: boolean) {
    this.userData.choice3 = value;
  }

  set finalEvaluation(value: number) {
    this.userData.finalEvaluation = value;
  }

  set opt1(value: number) {
    this.userData.opt1 = value;
  }

  set opt2(value: number) {
    this.userData.opt2 = value;
  }

  set opt3(value: string) {
    this.userData.opt3 = value;
  }

  get userData() {
    return this._userData;
  }
}

