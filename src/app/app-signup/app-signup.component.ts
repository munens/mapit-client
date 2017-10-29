import { Component, OnInit } from '@angular/core';
import { signUpBoxTrigger, expandInputTrigger } from './animations/animations';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css'],
  animations: [
    signUpBoxTrigger,
    expandInputTrigger
  ]
})

export class AppSignupComponent implements OnInit {
  input_firstname = false;

  constructor() { }

  ngOnInit() {
    
  }

}
