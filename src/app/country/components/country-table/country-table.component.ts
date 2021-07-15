import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Router } from "@angular/router";


@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {

  @Input() countriesArray: Country[] = [];

  constructor(private Router: Router) { }

  countryLink(query: string) {
    this.Router.navigate(['/viewCountry/' + query]);
  }


}
