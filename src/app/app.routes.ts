import { Routes } from '@angular/router';
import {Home} from './shared/presentation/views/home/home';
import {About} from './shared/presentation/views/about/about';
import {PageNotFound} from './shared/presentation/views/page-not-found/page-not-found';

const baseTitle = 'DoofPlus'

/**
 * Import views for the routes
 */
const about = () =>
  import('./shared/presentation/views/about/about').then(m => m.About);

/**
 * Define the routes
 */
export const routes: Routes = [
  { path: 'home', component: Home, title: `${baseTitle} - Home` },
  { path: 'about', loadComponent: about, title: `${baseTitle} - About` },
];
