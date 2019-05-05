import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeannieComponent } from './jeannie.component';

describe('JeannieComponent', () => {
  let component: JeannieComponent;
  let fixture: ComponentFixture<JeannieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeannieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeannieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
