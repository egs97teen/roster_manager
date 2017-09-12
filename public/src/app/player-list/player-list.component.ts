import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private _playerService: PlayerService) { }

  players = [];
  errors = [];

  getAll() {
  	this._playerService.retrieveAll().then( data => this.players = data).catch( err => { this.errors = err.errors });
  }
  
  ngOnInit() {
  	this.getAll();
  }

  deletePlayer(player_id) {
  	this._playerService.deletePlayer(player_id).then( data => this.getAll() ).catch(err => { this.errors = err.errors });
  }
}
