import { TestBed } from '@angular/core/testing';

import { AutherizedPersonaService } from './auth.service';

describe('AuthService', () => {
  let service: AutherizedPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutherizedPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
