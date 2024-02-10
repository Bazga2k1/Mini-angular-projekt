import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-config',
  standalone: true,
  imports: [],
  templateUrl: './color-config.component.html',
  styleUrl: './color-config.component.css'
})

export class ColorConfigComponent {

  constructor(private selectionService: SelectionService, private router: Router) { }

  selectColor(model: string, price: number) {
    this.selectionService.setSelectedOptions({ colorModel: model, colorPrice: price });
    this.router.navigate(['/total']);
  }

  ngOnInit(): void {
    const selectedOptions = this.selectionService.getSelectedOptions();
  }

}
