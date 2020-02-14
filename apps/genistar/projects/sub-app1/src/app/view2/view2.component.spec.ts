import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View2Component } from './view2.component';
import { NavComponent } from '../nav/nav.component';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View2Component, NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
