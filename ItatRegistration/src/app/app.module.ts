import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule} from '@angular/forms';
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegformComponent } from './regform/regform.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavbarComponent,
      RegformComponent,
      RegistrationsComponent
   ],
   imports: [

<<<<<<< HEAD
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
=======
   BrowserModule,
      AppRoutingModule,
      FormsModule,
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35
      HttpClientModule
   ],
   providers: [
      UserService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
