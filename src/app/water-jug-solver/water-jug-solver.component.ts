import { Component } from '@angular/core';
import { WaterJugSolver } from './water-jug-solver';

@Component({
  selector: 'app-water-jug',
  templateUrl: './water-jug-solver.component.html',
  styleUrls: ['./water-jug-solver.component.css'],
})
export class WaterJugComponent {
  x: number = 0;
  y: number = 0;
  z: number = 0;
  steps: string[] = [];

  solve(): void {
    const solver = new WaterJugSolver(this.x, this.y, this.z);
    this.steps = solver.solve();
  }
}
