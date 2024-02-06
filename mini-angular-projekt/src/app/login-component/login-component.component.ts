import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})

export class LoginComponent {
  title = 'LoginComponent';
  
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Login clicked');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
