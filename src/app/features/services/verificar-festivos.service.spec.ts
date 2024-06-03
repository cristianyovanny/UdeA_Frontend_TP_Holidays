import { TestBed } from '@angular/core/testing';

import { VerificarFestivosService } from './verificar-festivos.service';

describe('VerificarFestivosService', () => {
  let service: VerificarFestivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificarFestivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
