import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Calculator';
  public sumResult:string;
  public substractResult:string; 
  public multiplyResult:string; 
  public divideResult:string;  
  public Operand1:string; 
  public Operand2:string;
  public Operand3:string; 
  public Operand4:string;
  public Operand5:string; 
  public Operand6:string;
  public Operand7:string; 
  public Operand8:string;
  public mySumCalc: string;
  public mySubstractCalc:string;
  public myMultiplyCalc:string;
  public myDivideCalc:string;
 


  reset(optype) {
    this.Operand1 = "";
    this.Operand2 = "";
    this.Operand3 = "";
    this.Operand4 = "";
    this.Operand5 = "";
    this.Operand6 = "";
    this.Operand7 = "";
    this.Operand8 = "";
    //
    if(optype != '+') {
      this.mySumCalc = "";
      this.sumResult = ""; 

    }
    if(optype != '-' ) {
      this.mySubstractCalc = "";
      this.substractResult = "";
    }
    if(optype != '*' ) {
      this.myMultiplyCalc = "";
      this.multiplyResult = "";
    }
    if(optype != '/' ) {
      this.myDivideCalc = "";
      this.divideResult = "";
    }
  }

  doAddition() {
      this.sumResult=String(Number(this.Operand1) + 
      Number(this.Operand2)); //Note how ‘this’ is used.
      this.mySumCalc = this.Operand1 + " + " + this.Operand2 + " = ";
      // Show add result.
      this.reset('+');
  }

  
  doSubtraction() {
    this.substractResult=String(Number(this.Operand3) - 
    Number(this.Operand4)); //Note how ‘this’ is used.
    this.mySubstractCalc = this.Operand3 + " - " + this.Operand4 + " = ";
    this.reset('-');
  }


  doMultiplication() {
    this.multiplyResult=String(Number(this.Operand5) * 
    Number(this.Operand6)); //Note how ‘this’ is used.
    this.myMultiplyCalc = this.Operand5 + " * " + this.Operand6 + " = ";
    this.reset('*');
  }

  doDivision() {
    this.divideResult=String((Number(this.Operand7) / 
    Number(this.Operand8)).toFixed(2)); //Note how ‘this’ is used.
    this.myDivideCalc = this.Operand7 + " / " + this.Operand8 + " = ";
    this.reset('/');
  }


}