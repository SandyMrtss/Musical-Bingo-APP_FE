import { Component } from '@angular/core';
import {Routes, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerService } from './service/player.service';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PlayerService]
})

export class AppComponent {
  title: string;
  routes: Routes = [  
    { path: 'players', component: PlayerListComponent }
];
  constructor() {
    this.title = 'Bingo Musical';
  }
}
