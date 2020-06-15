import { TestBed } from '@angular/core/testing';

import { MainNavService } from './main-nav.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MainNavService', () => {
  let service: MainNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(MainNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
