import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  numero1: number;
  numero2: number;
  resultado: number;

  constructor() { 
    this.numero1 = 100;
    this.numero2 = 56;
    this.resultado = 0;
  }
    
  ngOnInit(): void {
  }

  Sumar(): number {
    this.resultado = this.numero1 + this.numero2;
    return this.resultado;
  }

}
