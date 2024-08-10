import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PlayerService } from './../../service/player.service';
import { Player } from './../../model/player';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.css'
})

export class PlayerFormComponent implements OnInit {
  player: Player;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) 
    {
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
  onSubmit() {
    this.playerService.save(this.player).subscribe (result => 
      this.gotoPlayerList());
  }

  gotoPlayerList() {
    this.router.navigate(['/players']);
  }

  updatePlayer(): void {
    

    this.playerService.update(this.player, this.player.id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  deletePlayer(): void {
    if(window.confirm('¿Quieres eliminar el jugador ' + this.player.username + ' ? Esta acción no se puede deshacer.')){
      this.playerService.delete(this.player.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/players']);
        },
        error: (e) => console.error(e)
      });
    }
    
  }
}
