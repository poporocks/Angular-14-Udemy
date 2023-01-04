import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnDestroy {
  subscription: Subscription;
  presupuesto: number;
  restante: number;

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;

    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data);
    })
  }
  
  ngOnInit() {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
