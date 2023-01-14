import { Component } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {
  termino: string;
  suscripcion: Subscription;

  constructor(private _imagenService: ImagenService) { 
    this.termino = '';
    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(data => {
      console.log(data);
      this.termino = data;
      this.obtenerImagenes();
    });
  }

  obtenerImagenes() {
    this._imagenService.getImagenes(this.termino).subscribe(date => {
      console.log(DataTransfer);
    });
  }
}
