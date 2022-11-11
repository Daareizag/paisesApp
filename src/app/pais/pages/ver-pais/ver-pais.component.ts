import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',


})

export class VerPaisComponent implements OnInit  {

  pais!: Country;

constructor(private activatedRoute: ActivatedRoute, private PaisServices:PaisService){}


  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id})=> this.PaisServices.getPaisPorAlpha(id)
      ),tap(console.log)
    ).subscribe(pais=>this.pais=pais[0]);
  }

}
