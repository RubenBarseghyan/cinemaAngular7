import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietabComponent } from './movietab.component';

describe('MovietabComponent', () => {
  let component: MovietabComponent;
  let fixture: ComponentFixture<MovietabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
