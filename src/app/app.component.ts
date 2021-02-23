import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CountTime';
  nowDate = new Date();

  constructor(){
    setTimeout( ()=>{
      console.log('Hello world')
    
    }, 3000)
  }

}
