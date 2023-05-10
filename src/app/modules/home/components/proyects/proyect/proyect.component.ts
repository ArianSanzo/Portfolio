import { Component } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
  protected name: string="Portfolio";
  protected description: string="Mi portafolio virtual";
  protected releaseDate: string="2023";
  protected image: string="";
  protected url: string="";
}
