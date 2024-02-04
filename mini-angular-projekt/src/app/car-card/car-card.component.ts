import { Component, Input } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input() car: Car;

  configure() {
    console.log('Konfiguracija za Audi ', this.car.model);
  }
}
