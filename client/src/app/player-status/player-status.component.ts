import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './../player.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerStatusComponent implements OnInit {
  players: any = [];

  constructor(private _playerService: PlayerService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      console.log('in constructor: ', params.get('id'));
    });
   }

  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this._playerService.getGame(params.get('id'), (p) => {
        this.players = p['results'];
      });
   });
  }

  changeStatus(id, status) {
    console.log('change status', id, status);
    this._playerService.changeStatus(id, status);
    this._route.paramMap.subscribe( params => {
      this._playerService.getGame(params.get('id'), (p) => {
        this.players = p['results'];
      });
   });
  }

}
