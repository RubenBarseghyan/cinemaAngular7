import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactmovieComponent } from './exactmovie.component';

describe('ExactmovieComponent', () => {
  let component: ExactmovieComponent;
  let fixture: ComponentFixture<ExactmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExactmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExactmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
