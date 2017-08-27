import { Component } from '@angular/core';
import { S3Service } from './services/s3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private s3Service: S3Service){
    
  }

}
