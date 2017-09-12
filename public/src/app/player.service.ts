import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }
  retrieveAll() {
  	return this._http.get('/api/players').map( data => data.json() ).toPromise();
  }

  addPlayer(player) {
  	return this._http.post('/api/players/add', player).map(data => data.json() ).toPromise();
  }

  toPlaying(player_id, game_number) {
  	return this._http.get('/api/players/play/' + player_id + '/' + game_number).map(data => data.json() ).toPromise();
  }

  toNot(player_id, game_number) {
    return this._http.get('/api/players/not/' + player_id + '/' + game_number).map(data => data.json() ).toPromise();
  }

  toUndecided(player_id, game_number) {
    return this._http.get('/api/players/undecided/' + player_id + '/' + game_number).map(data => data.json() ).toPromise();
  }

  deletePlayer(player_id) {
  	return this._http.delete('/api/players/delete/' + player_id).map(data => data.json() ).toPromise();
  }
}
