import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';
import { NgFor } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterModule],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent implements OnInit{
  players!: Player[];

  constructor(
    private playerService: PlayerService, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.playerService.findAll().subscribe((data: Player[]) => {
        this.players = data;
    });
  }
  
  playerDetails(id: number) {
    this.router.navigate(['players', id]);
  }


}
