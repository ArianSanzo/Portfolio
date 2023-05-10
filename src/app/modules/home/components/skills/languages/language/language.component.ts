import { Component } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {
  protected language: string="Ingles";
  protected level: string="Avanzado";
  protected reference: string="";
}
