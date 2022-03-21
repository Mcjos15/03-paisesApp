import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  //creamos un evento para la llamada del metodo buscar que se ecnuentra en el otro componente, se activa cuando el usuario da enter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //Creamos un evento que se activa cuando el usuario deja de escribri
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();


  //input es cuando recibimos algo, output cuando mandamos algo,
  // en este caso estamos recibiendo el dato del placerholder del lado del html
  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject();
  //la idea de este debouncer es que se emita cuando el usuario deja de escribir

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    //Esto se dispara una unica vez cuando el componente está inicializado

    this.debouncer.pipe(
      //esto es como un sleep, lo que hace es que se espeerar el tiempo indicado y despues realiza
      //la acción del suscribre
      debounceTime(300)
    ).subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }


  buscar() {

    this.onEnter.emit(this.termino);

  }

  teclaPresionada() {
    //con esto cada que presiono una tecla se llama al metodo
    this.debouncer.next(this.termino);
  }

}
