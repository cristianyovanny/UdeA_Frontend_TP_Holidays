import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFestivosComponent } from './buscar-festivos.component';

describe('BuscarFestivosComponent', () => {
  let component: BuscarFestivosComponent;
  let fixture: ComponentFixture<BuscarFestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarFestivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
