import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brianc1Component } from './brianc1.component';

describe('Brianc1Component', () => {
  let component: Brianc1Component;
  let fixture: ComponentFixture<Brianc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brianc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brianc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
