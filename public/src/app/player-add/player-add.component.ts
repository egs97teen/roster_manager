import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  constructor(private _playerService: PlayerService, private _router: Router) { }
  player = {
  	name: '',
  	position: ''
  }

  errors = [];

  ngOnInit() {
  }

  newPlayer(){
  	this._playerService.addPlayer(this.player).then( data => data.json() ).catch( err => { this.errors = err.errors });
  	this._router.navigate(['/players','list'])
  }
}
