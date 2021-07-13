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
  index: number = 0;


  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.query = query;
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
    this.errorMsg = false;
    console.log(query);
    //Create suggestions

  }

}
