import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerManageComponent } from './player-manage/player-manage.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'players', redirectTo: 'players/list', pathMatch: 'full' },
    { path: 'players/list', component: PlayerListComponent , pathMatch: 'full' },
    { path: 'players/addplayer', component: PlayerAddComponent },
    { path: 'status/game/:id', component: PlayerStatusComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }




