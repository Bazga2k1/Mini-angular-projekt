import { Component } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(/*private afAuth: AngularFireAuth, private firestore: AngularFirestore,*/ private router: Router) {}

  register(){
    console.log("Registracija");
  }
  /*async register() {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(this.companyEmail, this.password);
      if (user) {
        console.log('Korisnik ', user, ' registriran!');

        const userData = {
          fullName: this.fullName,
          companyName: this.companyName,
          email: this.companyEmail,
          oib: this.oib,
        };

        await this.firestore.collection('users').doc(user.uid).set(userData);
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Greška pri registraciji:', error);
    }
  }*/
}
