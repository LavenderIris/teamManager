import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@Injectable()
export class PlayerService {


  constructor(private _http: HttpClient) { }

  addPlayer(player) {
    console.log('in service', player);
    this._http.post('/player', player).subscribe(
      success => {console.log('success!'); } ,
      err => {console.log(err); }
    );
  }

  getPlayers(callback) {
    return this._http.get('/player').subscribe(
      success => {callback(success); } ,
      err => {console.log(err); }
    );
  }

  getGame(id, callback) {
    return this._http.get('/game/' + id).subscribe(
      success => {callback(success); } ,
      err => {console.log(err); }
    );
  }

  changeStatus(id, st) {
    const data = {id: id, status: st};
    // you need to wrap the data into an object for a post request
    this._http.post('/status', data).subscribe(
      success => {console.log('success!'); } ,
      err => {console.log(err); }
    );
  }

  deletePlayer(id) {
    const data = {id: id};
    // console.log('in player delete angular', id);
    return this._http.post('/player/delete/', data).subscribe(
      success => {console.log('success'); },
      err => {console.log(err); }
    );
  }
}
