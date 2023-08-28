import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRetiroComponent } from './menu-retiro.component';

describe('MenuRetiroComponent', () => {
  let component: MenuRetiroComponent;
  let fixture: ComponentFixture<MenuRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRetiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
