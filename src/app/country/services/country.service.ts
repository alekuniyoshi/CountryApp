import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = "https://restcountries.eu/rest/v2";

  private httpParams = new HttpParams().set('fields', 'name;capital;population;alpha2Code;flag');

  constructor(private http: HttpClient) { }

  SearchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams });
  }

  SearchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  SearchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });

  }

  getCountryByCod(query: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${query}`;
    return this.http.get<Country>(url);
  }
}
