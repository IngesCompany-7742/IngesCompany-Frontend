import {Routes} from '@angular/router';
import {BatchList} from './views/batch-list/batch-list';
import {BatchForm} from './views/batch-form/batch-form';

/**
 * Route tree for Manufacturing presentation views.
 */
export const routes: Routes = [
  { path: 'batches', component: BatchList },
  { path: 'batches/new', component: BatchForm },
];
