import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    //aca lo que hacemos es recibir un observador y enviar otro de regreso

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlfa(id)
        //si no se ponen llaves es un return implicito
      ),tap(console.log)
      // el tap recibe el producto del switchmap y lo trabaja despues de este
    ).subscribe(pais => {

      this.pais = pais[0];
    });

    //esto de arriba es casi que lo mismo de abajo

    //   this.activatedRoute.params.subscribe(({ id/*Esto se llama desteructuración, con esto obtenemos
    // el valor del dato que se pasa en esta función*/}) => {

    //     //aca me suscribo nuevamente para obtener la información
    //     this.paisService.getPaisPorAlfa(id).subscribe(pais => {

    //     })
    //   })
  }

}
