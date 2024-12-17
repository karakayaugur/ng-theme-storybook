import { TestBed } from '@angular/core/testing';
import { SignInService } from './sign-in.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('SignInService Unit Test', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignInService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    service = TestBed.inject(SignInService);
  });

  it('should create a service', () => {
    expect(service).toBeTruthy();
  });
});
