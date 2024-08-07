import { Routes } from '@angular/router';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { PlayerFormComponent } from './component/player-form/player-form.component';

export const routes: Routes = [  
    { path: 'players', component: PlayerListComponent },
    { path: 'addPlayer', component: PlayerFormComponent }
];
