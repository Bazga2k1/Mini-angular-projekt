import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})

export class TotalComponent {

  constructor(public selectionService: SelectionService, private router: Router) { }

  orderCar(){
    const number = Math.floor((Math.random() * 100000000) + 1);
    this.selectionService.setSelectedOptions({ orderNo: number });
    this.router.navigate(['/success']);
  }

}
