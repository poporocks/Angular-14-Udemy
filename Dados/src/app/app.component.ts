import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzq = "../assets/img/dice1.png";
  dadoDer = "../assets/img/dice4.png";

  numero1: number = 1;
  numero2: number = 4;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzq = "../assets/img/dice" + this.numero1 + ".png";
    this.dadoDer = "../assets/img/dice" + this.numero2 + ".png";
  }
}
