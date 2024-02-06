import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(/*private afAuth: AngularFireAuth,*/ private router: Router) {}

  async login(){
    console.log("Prijava");
  }
  
  /*async login() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Korisnik prijavljen!');
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Greška u prijavi:', error);
    }
  }*/

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
