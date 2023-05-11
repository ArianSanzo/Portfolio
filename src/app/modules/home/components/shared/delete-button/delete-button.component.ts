import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {
  @Output() btnClick = new EventEmitter();

  constructor(){}

  ngOnInit() : void {
  }
  onClick(){
    this.btnClick.emit();
  }

}
