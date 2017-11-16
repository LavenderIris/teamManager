import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayerService } from './player.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerManageComponent } from './player-manage/player-manage.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerAddComponent,
    PlayerManageComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
