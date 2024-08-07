import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './../../service/player.service';
import { Player } from './../../model/player';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.css'
})

export class PlayerFormComponent {
  player: Player;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) {
      this.player = new Player();
    }
  
  onSubmit() {
    this.playerService.save(this.player).subscribe (result => 
      this.gotoPlayerList());
  }

  gotoPlayerList() {
    this.router.navigate(['/players']);
  }
}
