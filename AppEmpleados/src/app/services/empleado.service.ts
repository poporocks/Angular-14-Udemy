import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {nombreCompleto: 'Edgar Lao', correo: 'edgar1@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar2@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar3@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar4@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar5@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar6@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar7@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar8@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
  ];
  
  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }

  guardarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado);
  }
}
