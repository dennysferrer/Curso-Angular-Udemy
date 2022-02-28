import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = "Mensaje Inicial";
   }

  ngOnInit(): void {
  }

  onClick($event: any){
    console.log($event);
  }

  onSelect($event: any){
    console.log($event.target.value);
  }

  mouseEnter(){
    this.mensaje = "Mouse dentro del recuadro";
  }

  mouseOut(){
    this.mensaje = "Mouse fuera del recuadro";
  }

}
