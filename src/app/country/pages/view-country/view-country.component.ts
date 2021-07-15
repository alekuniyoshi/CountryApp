import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country, Translations } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html'

})
export class ViewCountryComponent implements OnInit {

  country!: Country;


  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByCod(id)),
        tap(console.log))
      .subscribe(country => { this.country = country});

    /* this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.countryService.getCountryByCod(id).subscribe(data => console.log(data));
    }) */
  }

}
