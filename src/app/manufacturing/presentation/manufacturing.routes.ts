import {Routes} from '@angular/router';
import {BatchList} from './views/batch-list/batch-list';

/**
 * Route tree for Manufacturing presentation views.
 */
export const routes: Routes = [
  { path: 'batches', component: BatchList },
];
