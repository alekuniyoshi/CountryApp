import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
   `
  ]
})
export class ByCountryComponent {

  query: string = '';
  errorMsg: boolean = false;
  countriesArray: Country[] = [];
  sugestionsCountries: Country[] = [];
  index: number = 0;
  showSugestion: boolean = false;

  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.showSugestion = false;
    this.query = query;
    this.countryService.SearchCountry(this.query)
      .subscribe(
        countries => {
          this.errorMsg = false;
          this.countriesArray = countries;
        },
        error => {
          this.errorMsg = true;
          this.countriesArray = [];
        }
      );
  }

  sugestions(query: string) {
    this.showSugestion = true;
    this.errorMsg = false;
    this.query = query;

    this.countryService.SearchCountry(query).subscribe(
      countries => (this.sugestionsCountries = countries.splice(0, 5)),
      (error => this.sugestionsCountries = []));

  }


}
