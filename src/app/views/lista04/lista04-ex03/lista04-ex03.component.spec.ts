import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista04Ex03Component } from './lista04-ex03.component';

describe('Lista04Ex03Component', () => {
  let component: Lista04Ex03Component;
  let fixture: ComponentFixture<Lista04Ex03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista04Ex03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista04Ex03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
