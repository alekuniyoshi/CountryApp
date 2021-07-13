import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  query: string = '';
  errorMsg: boolean = false;
  countriesArray: Country[] = [];
  index: number = 0;

  constructor(private countryService: CountryService) { }

  search(query: string) {
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
    this.errorMsg = false;
    console.log(query);
    //Create suggestions

  }

}
