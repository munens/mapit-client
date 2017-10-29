import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { S3Service } from './services/s3.service';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppSignupComponent } from './app-signup/app-signup.component';

const appRoutes: Routes = [
  { path: '', component: AppMainComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'signup', component: AppSignupComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppNavbarComponent,
    AppLoginComponent,
    AppSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
