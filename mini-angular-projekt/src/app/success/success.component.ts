import { Component } from '@angular/core';
import { SelectionService } from '../selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  constructor(public selectionService: SelectionService, private router: Router) { }

  returnHome(){
    console.log(this.selectionService.getSelectedOptions());
    this.router.navigate(['']);
  }

}
