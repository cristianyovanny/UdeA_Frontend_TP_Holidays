import { TestBed } from '@angular/core/testing';

import { ModalFestivoService } from './modal-festivo.service';

describe('ModalFestivoService', () => {
  let service: ModalFestivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalFestivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
