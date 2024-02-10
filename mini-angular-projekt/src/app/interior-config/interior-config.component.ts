import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior-config',
  standalone: true,
  imports: [],
  templateUrl: './interior-config.component.html',
  styleUrl: './interior-config.component.css'
})
export class InteriorConfigComponent {

  constructor(private selectionService: SelectionService, private router: Router) { }

  selectInterior(model: string, price: number) {
    this.selectionService.setSelectedOptions({ interiorModel: model, interiorPrice: price });
    this.router.navigate(['/confC']);
  }

}
