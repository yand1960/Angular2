import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calc1Component } from './calc1.component';

describe('Calc1Component', () => {
  let component: Calc1Component;
  let fixture: ComponentFixture<Calc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
