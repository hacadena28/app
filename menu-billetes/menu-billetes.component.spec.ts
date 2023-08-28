import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBilletesComponent } from './menu-billetes.component';

describe('MenuBilletesComponent', () => {
  let component: MenuBilletesComponent;
  let fixture: ComponentFixture<MenuBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBilletesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
