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
  idEmpleado: Number;
  accion: String;

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

    this._empleadoService.guardarEmpleado(empleado);
    this.route.navigate(['/']);
    this.snackBar.open('Empleado guardado con éxito.', 'X', {
      duration: 3000
    });
  }

  fValidaciones(propiedad: string, validador: string): boolean {
    return this.myForm.get(propiedad)!.hasError(validador) && this.myForm.get(propiedad)!.touched ? true : false;
  }
}
