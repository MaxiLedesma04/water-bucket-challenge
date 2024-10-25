import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterJugComponent } from './water-jug-solver.component';

describe('WaterJugSolverComponent', () => {
  let component: WaterJugComponent;
  let fixture: ComponentFixture<WaterJugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterJugComponent]
    });
    fixture = TestBed.createComponent(WaterJugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
