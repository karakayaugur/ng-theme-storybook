import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { Auth } from './auth.types';
import { STORAGE_KEY, STORAGE_TYPE } from './auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private storage: Storage = STORAGE_TYPE === 'session' ? sessionStorage : localStorage;
  private readonly _state: WritableSignal<Auth | null> = signal<Auth | null>(
    this.getStoredState() ?? null
  );

  readonly state = this._state.asReadonly();

  constructor() {
    effect(() => {
      if (this.state()) {
        this.storage.setItem(STORAGE_KEY, JSON.stringify(this.state()));
      } else {
        this.storage.removeItem(STORAGE_KEY);
      }
    });
  }

  setState(value: Auth): void {
    this._state.set(value);
  }

  clearState() {
    this._state.set(null);
  }

  private getStoredState(): Auth | null {
    const item = this.storage.getItem(STORAGE_KEY);
    if (!item) return null;
    try {
      return JSON.parse(item) as Auth;
    } catch {
      this.storage.removeItem(STORAGE_KEY);
      return null;
    }
  }
}
