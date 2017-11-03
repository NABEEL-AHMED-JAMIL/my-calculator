import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class OperationService {

    private addlink = "/add_link";
    private subtractlink = "/subtract_link";
    // 
    private assign_link: any;
    
    constructor(private http: Http) {}

    public getOperationNumber(firstNumber:any, secondNumber:any, operator:any): any {
        this.assign_link = operator == '-'? this.subtractlink: this.addlink;        
        console.log(this.assign_link);
        return this.http.get(this.assign_link+'/'+firstNumber+'/'+secondNumber)
        .map((response: Response) => {
            console.log(response);
                return response.json();
        });
    }


}