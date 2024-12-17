import { Injectable, signal } from '@angular/core';
import { systemConfig } from '@app/core/configs';
import { Permission } from '@app/core/enum';

const authServiceKey = systemConfig.authServiceKey || 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorised = signal(false);
  private appAccess = signal(false);

  readonly isAuthorised = this.authorised.asReadonly();
  readonly isAppAccess = this.appAccess.asReadonly();

  constructor() {}

  /**
   * Checks if the user is authorized based on stored authentication data.
   * Retrieves user data from local storage, verifies expiration, and updates authorization status.
   *
   * @returns {void} - Returns nothing; updates the authorization state internally.
   * @throws {Error} - Throws an error if local storage retrieval fails or data is malformed.
   */
  authCheck() {
    const authorisedUser = JSON.parse(
      localStorage.getItem(authServiceKey) || '{}'
    );
    const isExpired =
      authorisedUser.exp && authorisedUser.exp < Date.now() / 1000;

    if (!isExpired || authorisedUser.exp) {
      // this.permissionsService.addPermission(authorisedUser.roles);
      return this.authorised.set(true);
    }
    this.authorised.set(false);
  }

  /**
   * Resets the authorization state by clearing access flags and removing the auth token from local storage.
   *
   * @param {void} No parameters are accepted.
   * @returns {void} This function does not return a value.
   * @throws {void} This function does not throw exceptions.
   */
  flush() {
    this.authorised.set(false);
    this.appAccess.set(false);
    localStorage.removeItem(authServiceKey);
    // this.permissionsService.flushPermissions();
  }

  set auth(data: any) {
    const updatedAuthData = { ...this.auth, ...data };
    localStorage.setItem(authServiceKey, JSON.stringify(updatedAuthData));
    this.authCheck();
  }

  get auth() {
    return JSON.parse(localStorage.getItem(authServiceKey) || '{}');
  }
}
