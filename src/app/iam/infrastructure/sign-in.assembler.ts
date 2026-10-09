import {SignInResource, SignInResponse} from './sign-in.response';
import {SignInCommand} from '../domain/model/sign-in.command';
import {SignInRequest} from './sign-in.request';

export class SignInAssembler {
  static toResourceFromResponse(response: SignInResponse): SignInResource {
    return {
      id: response.id,
      username: response.username,
      token: response.token,
      roles: response.roles || []
    };
  }

  static toRequestFromCommand(command: SignInCommand): SignInRequest {
    return {
      username: command.username,
      password: command.password,
    };
  }
}
