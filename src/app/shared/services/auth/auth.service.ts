import {
  Injectable,
  signal,
  computed,
  effect,
  WritableSignal,
  inject,
  Signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from './auth.store';
import { Auth, User } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStore = inject(AuthStore);
  router = inject(Router);

  public readonly isAuthorized = computed(() => {
    !!this.authStore.state();
  });

  public set auth(value: Auth) {
    this.authStore.setState(value);
    this.router.navigate(['/dashboard']);
  }

  public get auth(): Signal<Auth | null> {
    return this.authStore.state;
  }

  public get token(): Signal<string | null> {
    return computed(() => this.authStore.state()?.token ?? null);
  }

  public get user(): Signal<User | null> {
    return computed(() => this.authStore.state()?.user ?? null);
  }

  public logout(): void {
    this.authStore.clearState();
  }
}
