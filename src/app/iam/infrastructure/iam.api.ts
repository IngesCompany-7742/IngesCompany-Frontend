import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map, catchError, throwError} from 'rxjs';
import {SignUpCommand} from '../domain/model/sign-up.command';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignUpResource, SignUpResponse} from './sign-up.response';
import {SignInResource, SignInResponse} from './sign-in.response';
import {SignUpAssembler} from './sign-up.assembler';
import {SignInAssembler} from './sign-in.assembler';

@Injectable({
  providedIn: 'root'
})
/**
 * The IamApi class provides methods for interacting with the IAM API, including signing up and signing in users.
 * @param http - The HttpClient used for making HTTP requests.
 * @param basePath - The base URL for the IAM API.
 */
export class IamApi {
  private readonly http = inject(HttpClient);
  private readonly basePath = 'http://localhost:3000/api/v1/authentication';

  /**
   * Signs up a new user using the provided SignUpCommand.
   * @param command
   */
  signUp(command: SignUpCommand): Observable<SignUpResource> {
    const request = SignUpAssembler.toRequestFromCommand(command);
    return this.http.post<SignUpResponse>(`${this.basePath}/sign-up`, request).pipe(
      map(response => SignUpAssembler.toResourceFromResponse(response)),
      catchError(error => throwError(() => new Error('Failed to sign up: ' + error.message)))
    );
  }

  /**
   * Signs in a user using the provided SignInCommand.
   * @param command
   */
  signIn(command: SignInCommand): Observable<SignInResource> {
    const request = SignInAssembler.toRequestFromCommand(command);
    return this.http.post<SignInResponse>(`${this.basePath}/sign-in`, request).pipe(
      map(response => SignInAssembler.toResourceFromResponse(response)),
      catchError(error => throwError(() => new Error('Failed to sign in: ' + error.message)))
    );
  }
}
