import { Routes } from '@angular/router';
import { Home } from './shared/presentation/views/home/home';
import { routes as manufacturingRoutes } from './manufacturing/presentation/manufacturing.routes';

const baseTitle = 'DoofPlus'

/**
 * Import views for the routes
 */
const about = () =>
  import('./shared/presentation/views/about/about').then(m => m.About);

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then(m=>m.PageNotFound);

/**
 * Define the routes where the toolbar and footer will be used
 */
export const routes: Routes = [
  { path: 'home', component: Home, title: `${baseTitle} - Home` },
  { path: 'about', loadComponent: about, title: `${baseTitle} - About` },

  /**
   * Define the routes for the manufacturing module
   */
  ...manufacturingRoutes,

  /**
   * Define the default route and the wildcard route for page not found
   */
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', loadComponent: pageNotFound, title: `${baseTitle} - Page Not Found` }
];
