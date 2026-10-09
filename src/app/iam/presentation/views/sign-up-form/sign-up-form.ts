import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IamStore} from '../../../application/iam.store';
import {SignUpCommand} from '../../../domain/model/sign-up.command';

@Component({
  selector: 'app-sign-up-form',
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
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css'
})

/**
 * The SignUpForm component provides a user interface for signing up new users.
 * It includes a form with fields for username and password, and handles form submission.
 * @param router - The Angular Router used for navigation after successful sign-up.
 * @param store - The IamStore used for managing user authentication state.
 */
export class SignUpForm {
  private router = inject(Router);
  private store = inject(IamStore);

  form = new FormGroup({
    username: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl('', {nonNullable: true, validators: [Validators.required]})
  });

  /**
   * Handles the sign-up process when the form is submitted.
   * It validates the form, creates a SignUpCommand, and calls the IamStore to perform the sign-up.
   * If the form is invalid, it does nothing.
   */
  performSignUp = () => {
    if (this.form.invalid) return;
    const signUpCommand = new SignUpCommand({
      username: this.form.value.username!,
      password: this.form.value.password!,
      roles: ['INSPECTOR'] // Default role for new signups in DoofPlus
    });
    this.store.signUp(signUpCommand, this.router);
  };
}
