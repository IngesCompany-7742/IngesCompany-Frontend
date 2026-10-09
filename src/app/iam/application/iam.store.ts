import {computed, inject, Injectable, signal} from '@angular/core';
import {Router} from '@angular/router';
import {IamApi} from '../infrastructure/iam.api';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignUpCommand} from '../domain/model/sign-up.command';
import {User} from '../domain/model/user.entity';

@Injectable({providedIn: 'root'})

/**
 * The IamStore class manages the state of the IAM domain, including user authentication and user data.
 * It provides methods for signing in, signing up, and signing out users, as well as managing the current user's state.
 */
export class IamStore {
  private readonly iamApi = inject(IamApi);

  private readonly isSignedInSignal = signal<boolean>(false);
  private readonly currentUsernameSignal = signal<string | null>(null);
  private readonly currentUserIdSignal = signal<number | null>(null);
  private readonly currentUserRolesSignal = signal<string[]>([]);
  private readonly usersSignal = signal<User[]>([]);
  private readonly loadingUsersSignal = signal<boolean>(false);

  readonly isSignedIn = this.isSignedInSignal.asReadonly();
  readonly currentUsername = this.currentUsernameSignal.asReadonly();
  readonly currentUserId = this.currentUserIdSignal.asReadonly();
  readonly currentUserRoles = this.currentUserRolesSignal.asReadonly();
  readonly users = this.usersSignal.asReadonly();
  readonly isLoadingUsers = this.loadingUsersSignal.asReadonly();

  readonly currentToken = computed(() => this.isSignedIn() ? localStorage.getItem('token') : null);

  constructor() {
    this.isSignedInSignal.set(false);
    this.currentUsernameSignal.set(null);
    this.currentUserIdSignal.set(null);
    this.currentUserRolesSignal.set([]);
  }

  /**
   * Signs in a user using the provided SignInCommand and navigates to the home page upon success.
   * @param signInCommand - The command containing the user's sign-in credentials.
   * @param router - The Angular Router used for navigation.
   */
  signIn(signInCommand: SignInCommand, router: Router) {
    this.iamApi.signIn(signInCommand).subscribe({
      next: (signInResource) => {
        localStorage.setItem('token', signInResource.token);
        this.isSignedInSignal.set(true);
        this.currentUsernameSignal.set(signInResource.username);
        this.currentUserIdSignal.set(signInResource.id);
        this.currentUserRolesSignal.set(signInResource.roles || []);
        router.navigate(['/home']).then();
      },
      error: (err) => {
        console.error('Sign-in failed:', err);
        this.resetState();
        router.navigate(['/iam/sign-in']).then();
      }
    });
  }

  /**
   * Signs up a new user using the provided SignUpCommand and navigates to the sign-in page upon success.
   * @param signUpCommand - The command containing the user's sign-up information.
   * @param router - The Angular Router used for navigation.
   */
  signUp(signUpCommand: SignUpCommand, router: Router) {
    this.iamApi.signUp(signUpCommand).subscribe({
      next: (signUpResource) => {
        console.log('Sign-up successful:', signUpResource);
        router.navigate(['/iam/sign-in']).then();
      },
      error: (err) => {
        console.error('Sign-up failed:', err);
        this.resetState();
        router.navigate(['/iam/sign-up']).then();
      }
    });
  }

  /**
   * Signs out the current user and navigates to the sign-in page.
   * @param router - The Angular Router used for navigation.
   */
  signOut(router: Router) {
    localStorage.removeItem('token');
    this.resetState();
    router.navigate(['/iam/sign-in']).then();
  }

  private resetState() {
    this.isSignedInSignal.set(false);
    this.currentUsernameSignal.set(null);
    this.currentUserIdSignal.set(null);
    this.currentUserRolesSignal.set([]);
  }
}
