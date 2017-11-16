import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerListComponent implements OnInit {
  players: any = [];
  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
    this.players = this._playerService.getPlayers( (p) => {
      this.players = p['results'];

    });
  }

  deletePlayer(id) {
    this.players = this._playerService.deletePlayer(id);
    this.players = this._playerService.getPlayers( (p) => {
      this.players = p['results'];
    });
    this._router.navigateByUrl('players/list');
   }
}
