import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista04Ex05Component } from './lista04-ex05.component';

describe('Lista04Ex05Component', () => {
  let component: Lista04Ex05Component;
  let fixture: ComponentFixture<Lista04Ex05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista04Ex05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista04Ex05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
