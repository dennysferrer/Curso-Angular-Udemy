import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string; 
  identiParrafo: string;
  identiInput: string;

  constructor() {
    this.mensaje = 'Un saludo a todos...';
    this.identiParrafo = 'parrafoPrincipal';
    this.identiInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Hola mundo ...';
      this.identiParrafo = 'main';
      this.identiInput = 'password';
    }, 5000);
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): string {
    return 'Saludo desde el método...';
  }

  

}
