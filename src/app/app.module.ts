import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PlayerService } from './service/player.service';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    ],
  providers: [PlayerService],
  bootstrap: []
})
export class AppModule { }
