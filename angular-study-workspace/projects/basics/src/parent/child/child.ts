import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  parent_input = input();  
  child_messege_event = output<string>();
  
  SendDataToParent()
  {
    const message = "Hello from child!";
    this.child_messege_event.emit(message);
  }
}
