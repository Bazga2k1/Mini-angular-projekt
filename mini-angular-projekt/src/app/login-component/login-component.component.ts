import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

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

  constructor(private appComponent: AppComponent, private router: Router) {}

  login() {
    const user = this.appComponent.users.find(u => u.companyEmail === this.email && u.password === this.password);
    if (user) {
      console.log('Prijava uspješna!');
      this.router.navigate(['/home']);

    } else {
      console.error('Pogrešan email ili zaporka!');
      window.location.reload();
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}