import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  @Input() userInput: string = "";
  result: string = "";

  reverseString(str:string){
    let bag = "";
    for(let i=str.length-1;i>=0; i--){
      bag+=str[i];
    }

    return bag;
  }

  handleClick(){
    this.result = this.reverseString(this.userInput);
  }
}
