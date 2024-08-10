import { RedirectCommand, Router, Routes } from '@angular/router';
import { PlayerDetailsComponent } from './component/player-details/player-details.component';
import { PlayerFormComponent } from './component/player-form/player-form.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { NewPlayerFormComponent } from './component/new-player-form/new-player-form.component';

export const routes: Routes = [
    { path: 'players', component: PlayerListComponent },
    { path: 'addPlayer', component: NewPlayerFormComponent},
    { path: 'players/:id', component: PlayerDetailsComponent},
    { path: 'players/:id/edit', component: PlayerFormComponent} 
];