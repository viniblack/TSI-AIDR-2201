import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNgsswitchComponent } from './exemplo-ngsswitch.component';

describe('ExemploNgsswitchComponent', () => {
  let component: ExemploNgsswitchComponent;
  let fixture: ComponentFixture<ExemploNgsswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploNgsswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNgsswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
