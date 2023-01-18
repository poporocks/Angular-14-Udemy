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
  listImagenes: any[] = [];
  bLoading: boolean = false;

  constructor(private _imagenService: ImagenService) { 
    this.termino = '';
    this.suscripcion = this._imagenService.getTerminoBusqueda().subscribe(data => {
      console.log(data);
      this.termino = data;
      this.bLoading = true;
      this.obtenerImagenes();
    });
  }

  obtenerImagenes() {
    this._imagenService.getImagenes(this.termino).subscribe(data => {
      console.log(DataTransfer);
      this.bLoading = false;

      if(data.hits.lenght === 0) {
        this._imagenService.setError('No encontramos ningún resultado.');
        return;
      }

      this.listImagenes = data.hits
    }, error => {
      this.bLoading = false;
      this._imagenService.setError('Ocurrió un inconveniente al realizar la búsqueda.');
        return;
    });
  }
}
