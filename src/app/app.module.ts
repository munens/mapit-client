import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { S3Service } from './services/s3.service';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
