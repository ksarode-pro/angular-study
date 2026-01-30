import { Component, input, signal } from '@angular/core';
import { Child } from "./child/child";

@Component({
  selector: 'app-parent-child-comm',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class ParentChildComm {
  parent_messege = signal("Hello from parent!");
  messege_from_child = signal("Click Greet Parent Component Button");

  HandleChildMessage(messageFromChild: string)
  {
    this.messege_from_child.set(messageFromChild);
  }
}
