import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';

const baseTitle = 'DoofPlus'

export const routes: Routes = [
  { path: 'home', component: Home, title: `${baseTitle} - Home` },
];
