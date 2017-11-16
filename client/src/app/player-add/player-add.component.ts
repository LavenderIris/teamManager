import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerAddComponent implements OnInit {
  player = { name: '',
             position: '',
             status: {type: String, default: 'undecided'},
             game: 0   };

  constructor(private _playerService: PlayerService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.player.game = (Math.floor((Math.random() * 3) + 1));
    this._playerService.addPlayer(this.player);
    this.player = { name: '',
    position: '',
    status: {type: String, default: 'undecided'},
    game: 0   };
    this._router.navigateByUrl('/players/list');
  }
}
