import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

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
  	this._playerService.toPlaying(player_id, 2).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

  not(player_id) {
  	this._playerService.toNot(player_id, 2).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

  undecided(player_id) {
  	this._playerService.toUndecided(player_id, 2).then( data => this.getAll() ).catch( err => { this.errors = err.errors });
  }

}
