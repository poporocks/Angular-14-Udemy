import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  factor = 1;
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'LIB']

  convertir(): void {
    this.factor = 1;

    switch(this.tengo) {
      case 'USD':
        switch(this.quiero){
          case 'EUR':
            this.factor = 0.94
            break;
          case 'LIB':
            this.factor = 0.82
            break;
        }
        break;
      case 'EUR':
        switch(this.quiero){
          case 'USD':
            this.factor = 1.06
            break;
          case 'LIB':
            this.factor = 0.87
            break;
        }
        break;
      case 'LIB':
        switch(this.quiero){
          case 'USD':
            this.factor = 1.21
            break;
          case 'EUR':
            this.factor = 1.14
            break;
        }
        break;
    }

    this.total = this.cantidad * this.factor;
  }
}
