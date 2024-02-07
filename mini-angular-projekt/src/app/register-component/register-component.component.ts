import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})

export class RegisterComponent {
  title = 'RegisterComponent';

  fullName: string = '';
  companyName: string = '';
  oib: string = '';
  companyEmail: string = '';
  password: string = '';

  constructor(private appComponent: AppComponent, private router: Router) {}

  register() {
    const newUser = {
      fullName: this.fullName,
      companyName: this.companyName,
      oib: this.oib,
      email: this.companyEmail,
      password: this.password
    };

    const existingUser = this.appComponent.users.find(u => u.companyEmail === this.companyEmail);
    if (existingUser) {
      console.error('Korisnik s ovim email-om već postoji!');
      window.location.reload();
      return;
    }

    this.appComponent.users.push(newUser);
    console.log('Novi korisnik ', newUser, 'registriran!');
    this.router.navigate(['/home']);
  }
}
