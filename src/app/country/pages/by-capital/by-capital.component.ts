import { Component, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  query: string = '';
  errorMsg: boolean = false;
  countriesArray: Country[] = [];
  sugestionsCapitals: Country[] = [];
  index: number = 0;
  showSugestion: boolean = false;


  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.query = query;
    this.showSugestion = false;
    this.countryService.SearchCapital(this.query)
      .subscribe(
        capitals => {
          this.errorMsg = false;
          this.countriesArray = capitals;
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

    this.countryService.SearchCapital(this.query).subscribe(
      capitals => (this.sugestionsCapitals = capitals.splice(0, 5)),
      (error => this.sugestionsCapitals = []));

  }

}
