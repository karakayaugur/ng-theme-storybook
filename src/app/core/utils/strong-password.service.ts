import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StrongPasswordService {
  generateStrongPassword(length: number = 12): string {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allChars = upperCase + lowerCase + numbers + specialChars;

    const getRandom = (chars: string) =>
      chars[Math.floor(Math.random() * chars.length)];

    let password =
      getRandom(upperCase) +
      getRandom(lowerCase) +
      getRandom(numbers) +
      getRandom(specialChars);

    for (let i = password.length; i < length; i++) {
      password += getRandom(allChars);
    }

    return password
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  }
}
