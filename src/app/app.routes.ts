import {Routes} from '@angular/router';
import {routes as manufacturingRoutes} from './manufacturing/presentation/manufacturing.routes';

const baseTitle = 'DoofPlus';

const layout = () => import('./shared/presentation/components/layout/layout').then(m => m.Layout);

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);

const iamRoutes = () => import('./iam/presentation/iam.routes').then(m => m.iamRoutes);

/**
 * Root routes. Public pages use the layout (toolbar and footer).
 */
export const routes: Routes = [
  { path: '', loadComponent: layout, children: [
    { path: '', redirectTo: '/iam/sign-in', pathMatch: 'full' },
    { path: 'iam', loadChildren: iamRoutes },
    ...manufacturingRoutes,
    { path: '**', loadComponent: pageNotFound, title: `${baseTitle} - Page Not Found` }
  ]}
];
