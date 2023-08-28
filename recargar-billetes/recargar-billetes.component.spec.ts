import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargarBilletesComponent } from './recargar-billetes.component';

describe('RecargarBilletesComponent', () => {
  let component: RecargarBilletesComponent;
  let fixture: ComponentFixture<RecargarBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargarBilletesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecargarBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
