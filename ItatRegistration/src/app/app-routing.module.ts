import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegformComponent } from './regform/regform.component';
import { LoginComponent } from './login/login.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'regform', component: RegformComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrations', component: RegistrationsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'regform', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
