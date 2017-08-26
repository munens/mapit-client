import { Injectable } from '@angular/core';
//import * as aws from 'aws-sdk';


@Injectable()
export class S3Service {

  private AWSService = (<any>Window).aws
  

  constructor() {

  }

  getSignedRequest(){
    debugger
  }

}
