import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  protected logo: string = "";
  protected title: string = "Estudiante";
  protected place: string = "UNR";
  protected state: boolean = true;
  protected startDate: string = "2000";
  protected endDate: string = "2005";
  protected info: string = "Descripción cortita.";

}
