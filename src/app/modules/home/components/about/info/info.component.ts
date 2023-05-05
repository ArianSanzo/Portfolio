import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  protected name: string = "Arián Ignacio Sanzo";
  protected title: string = "Full Stack Developer Jr";
  protected city: string = "Rosario, Santa Fe, Argentina";
  protected description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi esse a, saepe accusantium quo officia dolore nesciunt enim minima";
}
