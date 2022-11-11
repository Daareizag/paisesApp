import { Component, OnInit } from '@angular/core';
import { Capital } from '../../interface/capital.interface';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  resultado:string="";
  hayError:boolean = false
  capital: Capital[]=[];


  constructor(private PaisServices:PaisService){}

buscar(resultado:string){
  this.hayError=false;
  this.resultado=resultado;



  this.PaisServices.buscarCapital(resultado)
  .subscribe(capital=> {
    console.log(capital)
    this.capital=capital;

  }, (err)=>{
    this.hayError=true;
    this.capital=[];
  })



}

sugerencias(termino:string){
  this.hayError=false;
  // TODO: crear sugerencias

}

}
