import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerService } from './service/player.service';
import { FormsModule } from '@angular/forms';
import { PlayerFormComponent } from './component/player-form/player-form.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
    ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
