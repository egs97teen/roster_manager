import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {

  constructor(private _playerService: PlayerService) { }

  players = [];
  errors = [];

  getAll() {
  	this._playerService.retrieveAll().then( data => this.players = data).catch( err => { this.errors = err.errors });
  }

  ngOnInit() {
  	this.getAll();
  }

  playing(player_id) {
  	this._playerService.toPlaying(player_id, 3).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

  not(player_id) {
  	this._playerService.toNot(player_id, 3).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

  undecided(player_id) {
  	this._playerService.toUndecided(player_id, 3).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

}
