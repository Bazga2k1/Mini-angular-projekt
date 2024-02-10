import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-angular-projekt';

  users: any[] = [
    { fullName: 'Ivan Horvat', companyName: 'Taxi Fiume', oib: '3584230199', companyEmail: 'tfiume@gmail.com', password: 'password1' },
    { fullName: 'Luka Modrić', companyName: 'Fix Marketing', oib: '8426900147', companyEmail: 'lmodric@fix.com', password: 'password2' },
    { fullName: 'Filip Stjepanović', companyName: 'IT Mraz', oib: '1548642017', companyEmail: 'mrazit@yahoo.com', password: 'password3' }
  ];

  constructor(public router: Router) {}
    navigateToLogin() {
      this.router.navigate(['/login']);
    }
}