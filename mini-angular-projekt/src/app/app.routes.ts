import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login-component/login-component.component';
import { RimsConfigComponent } from './rims-config/rims-config.component';
import { EngineConfigComponent } from './engine-config/engine-config.component';
import { InteriorConfigComponent } from './interior-config/interior-config.component';
import { ColorConfigComponent } from './color-config/color-config.component';
import { TotalComponent } from './total/total.component';
import { RegisterComponent } from './register-component/register-component.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'confR', component: RimsConfigComponent},
    { path: 'confE', component: EngineConfigComponent},
    { path: 'confI', component: InteriorConfigComponent},
    { path: 'confC', component: ColorConfigComponent},
    { path: 'total', component: TotalComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }