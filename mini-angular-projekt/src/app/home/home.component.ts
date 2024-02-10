import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  constructor(private selectionService: SelectionService, private router: Router) { }

  selectCar(model: string, price: number) {
    this.selectionService.setSelectedOptions({ carModel: model, carPrice: price });
    this.router.navigate(['/confR']);
  }
}