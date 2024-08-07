import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent implements OnInit{
  players!: Player[];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
      this.playerService.findAll().subscribe((data: Player[]) => {
        this.players = data;
      });
  }
}
