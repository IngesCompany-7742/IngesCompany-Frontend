import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {IamStore} from '../application/iam.store';

/**
 * Blocks protected routes when no authenticated IAM session exists.
 */
export const iamGuard: CanActivateFn = (route, state) => {
  const store = inject(IamStore);
  const router = inject(Router);
  
  if (store.isSignedIn()) {
    return true;
  } else {
    router.navigate(['/iam/sign-in']).then();
    return false;
  }
};
