import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name1 ="vedant";
  // public siteurl = window.location.href;
  // public myid="test id";
  // public isdisable=false;
  // public sucsessclass="text-success";
  // public haserror=false;
    //  public xyz = true;
    //  public greeting: string;
    //  public multistyle= {
    //    color:"red",
    //    fontstyle:"italic"
    // public name="";
    // public displayname=false;
    // public color="green";
      public colors= ["red","yellow","green","white"];
    constructor() {
      console.log('Hi from constrcture');

    }

    ngOnInit(): void {

    }

     }




//   onClick(event){
//     console.log(event);
//     this.greeting =event.type;
//   }
//  greetuser(){
//   return "hello "  + this.name1;
// }
// logMessage(value){
//   console.log(value);
// }
// }
