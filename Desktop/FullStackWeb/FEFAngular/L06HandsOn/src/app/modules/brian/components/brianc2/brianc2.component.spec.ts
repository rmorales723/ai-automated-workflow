import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brianc2Component } from './brianc2.component';

describe('Brianc2Component', () => {
  let component: Brianc2Component;
  let fixture: ComponentFixture<Brianc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brianc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brianc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
