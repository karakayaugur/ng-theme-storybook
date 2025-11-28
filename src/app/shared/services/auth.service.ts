import { Injectable, signal, computed, effect, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

const AUTH_STORAGE_KEY = 'auth';
const AUTH_STORAGE_TYPE: 'localStorage' | 'sessionStorage' = 'localStorage';

interface Auth {
  id?: string;
  name?: string;
  email?: string;
  token?: string;
  exp?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storage: Storage =
    AUTH_STORAGE_TYPE === 'sessionStorage' ? sessionStorage : localStorage;
  private readonly _auth: WritableSignal<Auth | null> = signal<Auth | null>(this.readAuth());

  public readonly isAuthorized = computed(() => {
    const auth = this._auth();
    return auth?.exp ? auth.exp > Date.now() / 1000 : false;
  });

  public get auth(): Auth | null {
    return this._auth();
  }

  public set auth(data: Partial<Auth>) {
    this._auth.update((prev) => ({ ...(prev || {}), ...data }));
  }

  constructor(private readonly router: Router) {
    effect(() => {
      const auth = this._auth();
      auth ? this.persistAuth(auth) : this.clearAuth();
    });
  }

  public logout(): void {
    this._auth.set(null);
  }

  private persistAuth(auth: Auth): void {
    this.storage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
  }

  private clearAuth(): void {
    this.storage.removeItem(AUTH_STORAGE_KEY);
    this.router.navigate(['/sign-in']);
  }

  private readAuth(): Auth | null {
    const raw = this.storage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }
}
