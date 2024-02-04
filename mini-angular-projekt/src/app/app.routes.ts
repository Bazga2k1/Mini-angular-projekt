import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login-component/login-component.component';
//import { RegisterComponent } from './register-component/register-component.component';

export const routes: Routes = [
    //{ path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }