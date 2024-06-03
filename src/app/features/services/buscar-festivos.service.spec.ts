import { TestBed } from '@angular/core/testing';

import { BuscarFestivosService } from './buscar-festivos.service';

describe('BuscarFestivosService', () => {
  let service: BuscarFestivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarFestivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
