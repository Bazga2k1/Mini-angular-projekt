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

}
