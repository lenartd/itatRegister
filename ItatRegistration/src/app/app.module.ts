import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule} from '@angular/forms';
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> parent of 6fcd2e0... form submit etc.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
<<<<<<< HEAD
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
=======
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> parent of 6fcd2e0... form submit etc.
})
export class AppModule { }
