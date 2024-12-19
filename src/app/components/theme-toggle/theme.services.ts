import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeKey = "app-theme";

  constructor() {
    const theme =
      localStorage.getItem(this.themeKey) === "dark" ? "dark" : "light";
    this.setTheme(theme);
  }

  /**
   * Sets the application's theme by updating the document's color scheme
   * and storing the selected theme in local storage.
   *
   * @param theme - The desired theme, either 'light' or 'dark'.
   * @returns void
   * @throws None
   */
  setTheme(theme: "light" | "dark"): void {
    document.documentElement.setAttribute("color-scheme", theme);
    localStorage.setItem(this.themeKey, theme);
  }

  /**
   * Toggles the website's color theme between light and dark modes.
   * It retrieves the current theme from the document's attribute and switches to the opposite theme.
   *
   * @returns {void} - No return value.
   * @throws {Error} - Throws an error if setting the theme fails.
   */
  toggleTheme(): void {
    const currentTheme =
      document.documentElement.getAttribute("color-scheme") ?? "light";
    const theme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("color-scheme", theme);
    localStorage.setItem(this.themeKey, theme);
  }
}
