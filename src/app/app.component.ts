import { Component } from '@angular/core';
import { OperationService } from './app.service';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  public firstNumber:any;
  public secondNumber:any;
  public result: any;

  constructor(private op_service: OperationService) {}

  public add(): any{

    if(this.isNotNullOrNaN()){
      this.op_service.getOperationNumber(this.firstNumber,this.secondNumber, '+').
        subscribe(result => {
          console.log(result);
          this.result = result;
        });

    }else{
      this.result = "You Enter the Worng input";
    }
  }

  public subtract(): any{

    if(this.isNotNullOrNaN()){

      this.op_service.getOperationNumber(this.firstNumber,this.secondNumber, '-').
          subscribe(result => {
            console.log(result);
            this.result = result;
          });
    }else{
      this.result = "You Enter the Worng input";
    }
  }

  public isNotNullOrNaN(): any{
    if(this.firstNumber != null && this.secondNumber != null){
      if(!isNaN(this.firstNumber) && !isNaN(this.secondNumber)){
        return true;
      }
    }
  }

  public handleCorrectCaptcha($event) {
    let token = this.captcha.getResponse();
    this.op_service.login(token).subscribe(result => {
      console.log(result);
      this.result = result;
    });
  }

  public restCaptach() {
    
    this.captcha.reset();
  }

}
