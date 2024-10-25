export class WaterJugSolver {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  solve(): string[] {
    const steps: string[] = [];

    // Lógica del algoritmo para encontrar la solución
    if (this.z > this.x && this.z > this.y) {
      steps.push('No Solution');
      return steps;
    }

    // Ejemplo de pasos (debes reemplazar esto con la lógica adecuada)
    steps.push(`Fill jug X (${this.x} gallons)`);
    steps.push(`Transfer water to jug Y (${this.y} gallons)`);

    return steps;
  }
}
