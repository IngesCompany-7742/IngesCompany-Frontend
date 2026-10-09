import {Routes} from '@angular/router';
import {iamGuard} from './iam/infrastructure/iam.guard';
import {routes as manufacturingRoutes} from './manufacturing/presentation/manufacturing.routes';

const baseTitle = 'DoofPlus';

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then(m => m.PageNotFound);

const layout = () => import('./shared/presentation/components/layout/layout').then(m => m.Layout);
const workspaceShell = () =>
  import('./shared/presentation/components/workspace-shell/workspace-shell').then(m => m.WorkspaceShell);

const iamRoutes = () => import('./iam/presentation/iam.routes').then(m => m.iamRoutes);
const iamAdministrationRoutes = () => import('./iam/presentation/iam.routes').then(m => m.iamAdministrationRoutes);

/**
 * Route shown inside a frame when a path does not exist.
 */
const notFound = { path: '**', loadComponent: pageNotFound, title: `${baseTitle} - Page Not Found` };

/**
 * Root routes. Public pages use the layout (toolbar and footer); each environment uses the
 * workspace shell and is protected by the IAM guard.
 */
export const routes: Routes = [
  { path: '',               redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in',        loadComponent: layout, loadChildren: iamRoutes },
  { path: 'qa',             loadComponent: workspaceShell, canActivate: [iamGuard], data: { environment: 'qa' }, children: [
    notFound
  ]},
  { path: 'production',     loadComponent: workspaceShell, canActivate: [iamGuard], data: { environment: 'production' }, children: [
    notFound
  ]},
  { path: 'administration', loadComponent: workspaceShell, canActivate: [iamGuard], data: { environment: 'administration' }, children: [
    { path: '', loadChildren: iamAdministrationRoutes },
    notFound
  ]},
  { path: '',               loadComponent: layout, children: [
    ...manufacturingRoutes,
    notFound
  ]}
];
