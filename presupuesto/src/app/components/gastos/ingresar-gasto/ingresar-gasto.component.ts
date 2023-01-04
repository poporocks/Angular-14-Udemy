import { Component } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  concepto: string = '';
  cantidad: number = 0;
  formIncorrecto: boolean = false;
  mensaje: string = 'Concepto o cantidad incorrecto';

  constructor(private _presupuestoService: PresupuestoService) {
    this.concepto = '';
    this.cantidad = 0;
    this.formIncorrecto = false;
    this.mensaje = ''
  }

  agregarGasto(){
    if (this.cantidad > this._presupuestoService.restante) {
      this.formIncorrecto = true;
      this.mensaje = 'Cantidad ingresada es mayor al restante.';
      return;
    }

    if (this.concepto === '' || this.cantidad <= 0) {
      this.formIncorrecto = true;
      this.mensaje = 'Concepto o cantidad son incorrectos.';
      return;
    }

    const GASTO = {
      concepto: this.concepto,
      cantidad: this.cantidad
    }

    this._presupuestoService.agregarGasto(GASTO);

    this.formIncorrecto = false;
    this.concepto = '';
    this.cantidad = 0;
    this.mensaje = '';
  }
}
