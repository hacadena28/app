import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroDistintoComponent } from './retiro-distinto.component';

describe('RetiroDistintoComponent', () => {
  let component: RetiroDistintoComponent;
  let fixture: ComponentFixture<RetiroDistintoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetiroDistintoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetiroDistintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
