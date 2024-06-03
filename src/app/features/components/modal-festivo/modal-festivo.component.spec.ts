import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFestivoComponent } from './modal-festivo.component';

describe('ModalFestivoComponent', () => {
  let component: ModalFestivoComponent;
  let fixture: ComponentFixture<ModalFestivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFestivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFestivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
