import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinematabComponent } from './cinematab.component';

describe('CinematabComponent', () => {
  let component: CinematabComponent;
  let fixture: ComponentFixture<CinematabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinematabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinematabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
