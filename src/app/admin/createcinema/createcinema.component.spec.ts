import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecinemaComponent } from './createcinema.component';

describe('CreatecinemaComponent', () => {
  let component: CreatecinemaComponent;
  let fixture: ComponentFixture<CreatecinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
