import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePresentComponent } from './movie-present.component';

describe('MoviePresentComponent', () => {
  let component: MoviePresentComponent;
  let fixture: ComponentFixture<MoviePresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
