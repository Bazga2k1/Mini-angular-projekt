import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engine-config',
  standalone: true,
  imports: [],
  templateUrl: './engine-config.component.html',
  styleUrl: './engine-config.component.css'
})
export class EngineConfigComponent {

  constructor(private selectionService: SelectionService, private router: Router) { }

  selectEngine(model: string, price: number) {
    this.selectionService.setSelectedOptions({ engineModel: model, rimPrice: price });
    this.router.navigate(['/confI']);
  }

}
