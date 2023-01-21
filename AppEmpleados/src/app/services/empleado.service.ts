import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    {nombreCompleto: 'Edgar Lao', correo: 'edgar@correo.com', telefono: 1234567890, sexo: 'M', fechaIngreso: new Date(), estadoCivil: 'Casado' },
  ];
  
  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }
}
