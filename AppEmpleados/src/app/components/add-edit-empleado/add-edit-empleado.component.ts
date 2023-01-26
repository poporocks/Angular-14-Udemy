import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[];
  myForm: FormGroup;
  idEmpleado: number;
  accion: string;

  constructor(private fb: FormBuilder, private _empleadoService: EmpleadoService,
              private route: Router, public snackBar: MatSnackBar, private aRoute: ActivatedRoute) {
    this.idEmpleado = aRoute.snapshot.params['id'];
    this.accion = 'Guardar';
    this.estadosCiviles = [
      "Soltero",
      "Casado",
      "Union Libre",
      "Divorciado",
    ];

    this.myForm = fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined) {
      this.accion = 'Editar';
      this.getEmpleado();
    }
  }

  guardarEmpleado() {
    console.log(this.myForm);
    const empleado: Empleado = {
      nombreCompleto: this.myForm.get("nombreCompleto")!.value,
      correo: this.myForm.get("correo")!.value,
      fechaIngreso: this.myForm.get("fechaIngreso")!.value,
      telefono: this.myForm.get("telefono")!.value,
      estadoCivil: this.myForm.get("estadoCivil")!.value,
      sexo: this.myForm.get("sexo")!.value,
    };

    var mensaje = 'Empleado guardado con éxito.';

    if (this.idEmpleado !== undefined) {
      this._empleadoService.editEmpleado(empleado, this.idEmpleado);
      mensaje = 'Empleado editado con éxito.';
    } else {
      this._empleadoService.guardarEmpleado(empleado);
    }

    this.route.navigate(['/']);
    this.snackBar.open(mensaje, 'X', {
      duration: 3000
    });
  }

  fValidaciones(propiedad: string, validador: string): boolean {
    return this.myForm.get(propiedad)!.hasError(validador) && this.myForm.get(propiedad)!.touched ? true : false;
  }

  getEmpleado() {
    const empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    console.log(empleado);
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo,
    })
  }
}
