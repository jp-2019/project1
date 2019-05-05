import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GregsNavbarComponent } from './gregs-navbar.component';

describe('GregsNavbarComponent', () => {
  let component: GregsNavbarComponent;
  let fixture: ComponentFixture<GregsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GregsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GregsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
