import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';
import { ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit{
  player: Player;  


  constructor (
    private playerService: PlayerService, 
    private route: ActivatedRoute, 
    private router: Router) {
      this.player = new Player();
    }

  ngOnInit(): void {
    this.getPlayer(this.route.snapshot.params['id'])
  }

  getPlayer(id: number): void {
    this.playerService.getPlayer(id).subscribe({
      next: (data) => {
        this.player = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  
}
