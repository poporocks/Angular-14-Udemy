import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent {
  form: FormGroup;
  bLoading: boolean;
  titulo: string;
  id: string | undefined;

  constructor(private fb: FormBuilder, private _tarjetaService: TarjetaService,
              private toastr: ToastrService) {
    this.bLoading = false;
    this.titulo = 'Agregar tarjeta';
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data => {
      console.log(data);
      this.id = data.id;
      this.titulo = 'Editar Tarjeta';
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        cvv: data.cvv,
      });
    });
  }

  guardarTarjeta(){
    if (this.id === undefined) {
      this.agregarTarjeta();
    } else {
      this.editarTarjeta(this.id);
    }
  }

  agregarTarjeta() {
    const TARJETA: TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this.bLoading = true;
    this._tarjetaService.guardarTarjeta(TARJETA).then(() => {
      this.bLoading = false;
      this.toastr.success('Tarjeta registrada con éxito', 'Tarjeta registrada');
      this.form.reset();
    }, error => {
      this.bLoading = false;
      this.toastr.error('Ocurrió un inconveniente al registrar la tarjeta', 'Error');
      console.log(error);
    });
  }

  editarTarjeta(id: string) {
    const TARJETA: any = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaActualizacion: new Date()
    }

    this.bLoading = true;
    this._tarjetaService.editarTarjeta(id, TARJETA).then(() => {
      this.bLoading = false;
      this.titulo = "Agregar tarjeta";
      this.form.reset();
      this.id = undefined;
      this.toastr.info('La tarjeta fue actualizada con éxito', 'Tarjeta modificada');
    }, error => {
      console.log(error);
      this.toastr.info('Ocurrió un inconveniente al editar la tarjeta', 'Error');
    });
  }
}
