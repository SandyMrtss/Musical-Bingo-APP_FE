import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Player } from './../model/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

 
export class PlayerService {
  private playersUrl: string;
  
  header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http: HttpClient) { 
    this.playersUrl = 'http://localhost:9000/api/v1/bingoGame/players';
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl + '/allPlayers', {headers: this.header});
  }

  public save(player: Player) {
    return this.http.put<Player>(this.playersUrl + '/newPlayer', player, {headers: this.header});
  }
}
