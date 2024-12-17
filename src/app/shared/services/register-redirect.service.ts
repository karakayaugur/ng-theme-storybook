import { Injectable, signal, effect } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterRedirectService {
  private registerStepUrl = signal<string | null>(null);

  constructor(private router: Router) {
    effect(() => {
      //   const url = this.redirectUrl();
      //   if (url) {
      //     this.router.navigate([url]);
      //     this.redirectUrl.set(null);
      //   }
    });
  }

  // Method to trigger redirection
  registerStep(data: any) {
    const url = signal<string | null>(null);
    switch (data.state) {
      case 'WAITING_EMAIL_VERIFICATION':
        this.router.navigate(['/register/verify-email', data.registration_id]);
        return true;
      case 'WAITING_PROFILE':
        this.router.navigate(['/register/profile', data.registration_id]);
        return true;
      case 'WAITING_PHONE_NUMBER':
      case 'WAITING_PHONE_NUMBER_VERIFICATION':
      case 'PHONE_NUMBER_VERIFICATION_FAILED':
      case 'PHONE_NUMBER_RECEIVED':
      case 'PHONE_NUMBER_NOT_VALID':
      case 'PHONE_NUMBER_ALREADY_EXISTS':
      case 'VALIDATING_PHONE_NUMBER_VERIFICATION_CODE':
        this.router.navigate(['/register/phone-number', data.registration_id]);
        return true;
      case 'WAITING_PASSWORD':
        // it works with verification id and is not visible in any response
        // so we dont need to navigate the active page
        return true;
      case 'REGISTRATION_COMPLETED"':
        this.router.navigate(['/login']);
        return true;
      case 'INITIALIZED':
      case 'STARTED':
      case 'CONSENT_REQUIRED':
      case 'USER_ALREADY_EXISTS':
        this.router.navigate(['/register']);
        return true;
      default:
        return false;
    }

    this.router.navigate(['/register']);
    this.registerStepUrl.set(data);
  }
}
