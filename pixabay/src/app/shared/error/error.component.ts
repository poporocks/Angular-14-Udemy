import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {
  texto: string;
  bMostrar: boolean;
  suscripcion: Subscription;

  constructor(private _imagenService: ImagenService) {
    this.texto = '';
    this.bMostrar = false;
    this.suscripcion = this._imagenService.getError().subscribe(data => {
      this.mostrarMensaje();
      this.texto = data;
    })
  }

  mostrarMensaje() {
    this.bMostrar = true
    setTimeout(() => {
      this.bMostrar = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
