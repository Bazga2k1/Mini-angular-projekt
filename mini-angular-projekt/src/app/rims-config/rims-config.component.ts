import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rims-config',
  standalone: true,
  imports: [],
  templateUrl: './rims-config.component.html',
  styleUrl: './rims-config.component.css'
})
export class RimsConfigComponent {

  constructor(private selectionService: SelectionService, private router: Router) { }

  selectRim(model: string, price: number) {
    this.selectionService.setSelectedOptions({ rimModel: model, rimPrice: price });
    this.router.navigate(['/confE']);
    console.log(this.selectionService.getCarModel());
    console.log(this.selectionService.getCarPrice());
    console.log(this.selectionService.getRimModel());
    console.log(this.selectionService.getRimPrice());
  }
}
