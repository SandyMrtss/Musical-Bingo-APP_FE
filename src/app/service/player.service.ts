import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Player } from './../model/player';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9000/api/v1/bingoGame/players';


@Injectable({
  providedIn: 'root'
})

 
export class PlayerService {
  
  header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(baseUrl +'/allPlayers', {headers: this.header});
  }

  public getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(baseUrl + '/' + id, {headers: this.header});
  }

  public save(player: Player): Observable<Player> {
    return this.http.put<Player>(baseUrl +'/newPlayer', player, {headers: this.header});
  }

  public update(player: Player, id: number): Observable<Player>{
    return this.http.put<Player>(baseUrl + '/' + id, player, {headers: this.header});
  }

  public delete(id: number): Observable<Player>{
    return this.http.delete<Player>(baseUrl + '/' + id, {headers: this.header});
  }
}
