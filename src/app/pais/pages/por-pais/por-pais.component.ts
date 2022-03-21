import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  mostrarSugerencias: boolean = false;

  paisesSugeridos: Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    //esto quita el error cuando el usuario continua escribiendo
    this.hayError = false;

    this.mostrarSugerencias = true;
    if (termino.trim() == '') { return; }

    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 3),
        (err) => this.paisesSugeridos = []);

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);


  }
}
