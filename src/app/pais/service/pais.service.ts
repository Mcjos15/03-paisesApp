import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population');

    //Con esto hacemos que sea posible reducir el peso de la
    //consulta mediante la seleccipn de los atributos que queremos
  }

  //así se hacen las peticiones http, como las que se hacen en Angular
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlfa(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      );

  }

}
