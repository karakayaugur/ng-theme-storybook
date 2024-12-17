import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  public blockSpecialChar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasSpecialChar = /[^\p{L}\s]/gu.test(control.value);
      return hasSpecialChar ? { specialChar: true } : null;
    };
  }

  public emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      const domainPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = domainPattern.test(email);
      return isValid ? null : { invalidEmailDomain: { value: control.value } };
    };
  }

  public notOnlyWhitespace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    };
  }

  public alphabeticOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isValid = /^[a-zA-Z\s]+$/.test(control.value);
      return isValid ? null : { alphabeticOnly: { valid: false } };
    };
  }

  public blockNumbers(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumber = /\d/.test(control.value);
      return hasNumber ? { hasNumber: true } : null;
    };
  }

  public bicValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const _regex = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
      const _result = _regex.test(control.value);
      return _result ? null : { isBic: true };
    };
  }

  public passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const errors: ValidationErrors = {};

    if (password.length < 8) {
      errors['minLength'] = {
        minLength: 8,
        actualLength: password.length,
      };
    }

    if (password.length > 50) {
      errors['maxLength'] = {
        maxLength: 50,
        actualLength: password.length,
      };
    }

    if (!/[A-Z]/.test(password)) {
      errors['noUppercase'] = true;
    }

    if (!/[a-z]/.test(password)) {
      errors['noLowercase'] = true;
    }

    if (!/[!@#$%^&*(),.?":{}|<>\+\-]/.test(password)) {
      errors['noSymbol'] = true;
    }

    if (!/\d/.test(password)) {
      errors['noDigit'] = true;
    }

    const patternDigitAndLetter = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (!patternDigitAndLetter.test(password)) {
      errors['noDigitLetter'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }
}
