import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private apiUrl = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }

  SearchCountry(query: string): Observable<Country[]> {

    const url = this.apiUrl + /name/ + query.trim();

    return this.http.get<Country[]>(url);
  }
}