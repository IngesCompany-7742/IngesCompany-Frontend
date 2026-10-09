import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IamStore} from '../../../application/iam.store';
import {SignInCommand} from '../../../domain/model/sign-in.command';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatError,
    MatButton,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in-form.html',
  styleUrl: './sign-in-form.css'
})
/**
 * The SignInForm component provides a user interface for signing in to the application.
 * It includes a form with fields for username and password, and handles form submission.
 * @param router - The Angular Router used for navigation after successful sign-in.
 * @param store - The IamStore used for managing user authentication state.
 */
export class SignInForm {
  private router = inject(Router);
  private store = inject(IamStore);

  form = new FormGroup({
    username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  });

  /**
   * Handles the sign-in form submission.
   * If the form is valid, it creates a SignInCommand and calls the IamStore's signIn method.
   */
  performSignIn = () => {
    if (this.form.invalid) return;
    const signInCommand = new SignInCommand({
      username: this.form.value.username!,
      password: this.form.value.password!
    });
    this.store.signIn(signInCommand, this.router);
  };
}
