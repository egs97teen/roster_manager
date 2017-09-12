import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';

const routes: Routes = [
  { path: '',  redirectTo: '/players', pathMatch:'full' },
  { path: 'players', component: ManagePlayersComponent, children:[
  	{ path: '', component: PlayerListComponent },
  	{ path: 'list', component: PlayerListComponent },
  	{ path: 'add', component: PlayerAddComponent }] },
  {path: 'status/game', component: ManageStatusComponent, children:[
  	{ path: '', component: Game1Component },
  	{ path: '1', component: Game1Component }, 
  	{ path: '2', component: Game2Component },
  	{ path: '3', component: Game3Component }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
