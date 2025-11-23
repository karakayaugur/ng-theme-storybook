import { Injectable, effect } from '@angular/core';
import { WritableSignal, signal } from '@angular/core';
import { Theme } from './type'; // type dosyası

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _theme: WritableSignal<Theme> = signal<Theme>(
    (localStorage.getItem('theme') as Theme) ??
      (document.documentElement.getAttribute('color-scheme') as Theme) ??
      'light'
  );

  constructor() {
    effect(() => {
      const theme = this._theme();
      document.documentElement.setAttribute('color-scheme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    });
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  toggleTheme(): void {
    this.setTheme(this._theme() === 'light' ? 'dark' : 'light');
  }

  get theme() {
    return this._theme;
  }
}
