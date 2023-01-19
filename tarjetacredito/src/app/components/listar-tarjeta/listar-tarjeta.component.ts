import { Component } from '@angular/core';
import { TarjetaService } from '../../services/tarjeta.service';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { ToastrService } from 'ngx-toastr';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent {
  listTarjetas: TarjetaCredito[];

  constructor(private _tarjetaService: TarjetaService, private toastr: ToastrService) { 
    this.listTarjetas = [];
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().subscribe(data => {
      this.listTarjetas=[];
      data.forEach((element: any) => {
        this.listTarjetas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });
  }

  eliminarTarjeta(id: string) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.error('La tarjeta fue eliminada con éxito', 'Registro eliminado')
    }, error => {
      this.toastr.error('Ocurrió un inconveniente al eliminar la tarjeta', 'Error')
      console.log(error);
    });
  }

  editarTarjeta(tarjeta: TarjetaCredito) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
}
