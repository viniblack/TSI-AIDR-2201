import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExNgif01Component } from './ex-ngif01.component';

describe('ExNgif01Component', () => {
  let component: ExNgif01Component;
  let fixture: ComponentFixture<ExNgif01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExNgif01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExNgif01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
