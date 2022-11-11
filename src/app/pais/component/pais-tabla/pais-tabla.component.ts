import { Component, Input, OnInit } from '@angular/core';
import { Capital } from '../../interface/capital.interface';

import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {


  @Input() paises: Country[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
