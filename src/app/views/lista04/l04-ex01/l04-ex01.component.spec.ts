import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L04Ex01Component } from './l04-ex01.component';

describe('L04Ex01Component', () => {
  let component: L04Ex01Component;
  let fixture: ComponentFixture<L04Ex01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L04Ex01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L04Ex01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
