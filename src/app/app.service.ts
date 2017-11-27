import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class OperationService {

    private addlink = "/add_link";
    private subtractlink = "/subtract_link";
    private localhost = "http://localhost:8080";
    // 
    private assign_link: any;
    
    constructor(private http: Http) {}

    public getOperationNumber(firstNumber:any, secondNumber:any, operator:any): any {

      this.assign_link = operator == '-' ? this.subtractlink : this.addlink;
      return this.http.get(this.assign_link+'/first_number/'+firstNumber+'/second_number/'+secondNumber)
        .map((response: Response) => {
          return response.json();
        });
    }

    public login(model:any): any{
      console.log(model)
      return this.http.post(this.localhost+ "/login/", model)
      .map((response: Response) => {
        return response.json();
      });
    }


}
