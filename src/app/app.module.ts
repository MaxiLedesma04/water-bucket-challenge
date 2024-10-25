import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WaterJugComponent } from './water-jug-solver/water-jug-solver.component';

@NgModule({
  declarations: [AppComponent, WaterJugComponent],
  imports: [
    BrowserModule,
    FormsModule, // Necesario para usar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
