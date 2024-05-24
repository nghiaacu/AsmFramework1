import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nghiahdph39065Guard } from './nghiahdph39065.guard';

describe('nghiahdph39065Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nghiahdph39065Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
