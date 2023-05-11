import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Output() btnClick = new EventEmitter();

  constructor(){}

  ngOnInit() : void {
  }
  onClick(){
    this.btnClick.emit();
  }

}
