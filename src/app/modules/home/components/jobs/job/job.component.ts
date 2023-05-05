import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  public logo: string = "";
  place: string = "Ejemplo";
  job: string = "Ejemplificador";
  description: string = "Hacemos varias cosas";
  jobStart: any = "2017";
  jobEnd: any = "2019";
}
