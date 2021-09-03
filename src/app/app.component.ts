import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-learn';
  public my_number: number = 0;

  increment(){
    this.my_number+=1;
  }
  decrement(){
    this.my_number-=1;
  }
}
