import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 33;
  peso = 90;
  altura = 173

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }
}
