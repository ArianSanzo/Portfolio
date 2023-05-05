import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  name: string = "Arián Ignacio Sanzo";
  title: string = "Full Stack Developer Jr";
  city: string = "Rosario, Santa Fe, Argentina";
  description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi esse a, saepe accusantium quo officia dolore nesciunt enim minima";
}
