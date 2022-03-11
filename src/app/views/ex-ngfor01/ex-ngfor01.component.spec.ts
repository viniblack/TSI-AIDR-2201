import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgfor01Component } from './ex-ngfor01.component';

describe('ExNgfor01Component', () => {
  let component: ExNgfor01Component;
  let fixture: ComponentFixture<ExNgfor01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgfor01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgfor01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
