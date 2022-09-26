import { TestBed } from '@angular/core/testing';

import { SubirimagenesService } from './subirimagenes.service';

describe('SubirimagenesService', () => {
  let service: SubirimagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirimagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
