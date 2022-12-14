import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calc3Component } from './calc1.component';

describe('Calc1Component', () => {
  let component: Calc3Component;
  let fixture: ComponentFixture<Calc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calc3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
