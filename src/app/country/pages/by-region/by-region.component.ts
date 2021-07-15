import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {


  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = "";
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {
    if (region === this.activeRegion) { return; }
    this.activeRegion = region;
    this.countries = [];
    this.countryService.SearchRegion(region).subscribe(country => { return this.countries = country });
  }


}
