import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capital } from '../interface/capital.interface';

import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";
  private apiUrl2: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) {}

  buscarPais( termino: String ): Observable<Country[]> {
    const url =`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(resultado:string):Observable<Capital[]>{
    const url=`${this.apiUrl2}/capital/${resultado}`;
    return this.http.get<Capital[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url=`${this.apiUrl2}/alpha/${id}`;
    return this.http.get<Country>(url);

  }

  buscarRegion (region:string):Observable<Country[]>{
    const url=`${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url)
  }



}
