import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {

  query: string = '';
  errorMsg: boolean = false;
  countriesArray: Country[] = [];
  index: number = 0;

  constructor(private countryService: CountryService) { }

  search(query: string) {
    this.query = query;
    this.countryService.SearchRegion(this.query)
      .subscribe(
        regions => {
          this.errorMsg = false;
          this.countriesArray = regions;
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
