import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista04Ex04Component } from './lista04-ex04.component';

describe('Lista04Ex04Component', () => {
  let component: Lista04Ex04Component;
  let fixture: ComponentFixture<Lista04Ex04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista04Ex04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista04Ex04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
