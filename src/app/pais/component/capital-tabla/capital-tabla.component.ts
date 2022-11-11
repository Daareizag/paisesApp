import { Component, Input, OnInit } from '@angular/core';
import { Capital } from '../../interface/capital.interface';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [
  ]
})
export class CapitalTablaComponent implements OnInit {


  @Input() capital: Capital[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
