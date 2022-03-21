import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',

  //s{olo se aplican los cambios css a los elementos de este componente

  styles: [

    `button{
      margin-right: 5px;
    }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  paises: Country[] = [];


  hayError: boolean = false;

  regionActiva: string = '';
  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';

  }

  activarRegion(region: string) {


    if (region === this.regionActiva) { return; }
    this.regionActiva = region;

    this.hayError = false;

    this.paisService.buscarRegion(region).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

}
