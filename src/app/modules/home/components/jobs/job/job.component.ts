import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  protected logo: string = "";
  protected place: string = "Ejemplo";
  protected job: string = "Ejemplificador";
  protected description: string = "Hacemos varias cosas";
  protected jobStart: any = "2017";
  protected jobEnd: any = "2019";
}
