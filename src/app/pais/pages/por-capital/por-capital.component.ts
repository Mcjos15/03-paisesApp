import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];
  constructor(private capitalService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;

    this.termino = termino;

    this.capitalService.buscarCapital(termino).subscribe((capitales) => {
      this.capitales = capitales;
    }, (err) => {
      this.hayError = true;
      this.capitales = [];
    });
  }

  sugerencias(termino: string) {
    //esto quita el error cuando el usuario continua escribiendo
    this.hayError = false;

  }

}
