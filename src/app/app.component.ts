import { Component } from '@angular/core';
import { OperationService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public firstNumber:any;
  public secondNumber:any;
  public result: any;

  constructor(private op_service: OperationService) {}

  public add(): any{

    if(this.isNotNull()){    
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
    
    if(this.isNotNull()){
    
      this.op_service.
        getOperationNumber(this.firstNumber,this.secondNumber, '-').
          subscribe(result => {
            console.log(result);
            this.result = result;
          });
    }else{
      this.result = "You Enter the Worng input";
    }
  }

  public isNotNull(): any{
    if(this.firstNumber != null && this.secondNumber != null){
      if(!isNaN(this.firstNumber) && !isNaN(this.secondNumber)){
        return true;
      }
    }
  }


}
