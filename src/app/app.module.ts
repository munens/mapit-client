import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { S3Service } from './services/s3.service';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';

const appRoutes: Routes = [
  { path: '', component: AppMainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
