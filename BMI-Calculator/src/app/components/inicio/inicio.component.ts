import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 33;
  peso = 90;
  altura = 173
  gender = 'M'
  
  constructor(private router: Router) { }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  seleccionarGenero(genero: string) {
    this.gender = genero;
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow((this.altura / 100), 2);
    this.router.navigate(['/resultado', BMI.toFixed(2)]);
  }
}
