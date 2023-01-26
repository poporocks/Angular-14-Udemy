import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  listEmpleados: Empleado[] = [];
  dataSource = new MatTableDataSource<Empleado>();

  @ViewChild(MatSort, {static: true}) sort:any = MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator:any = MatPaginator;
  constructor(private _empleadoService: EmpleadoService, public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  cargarEmpleados() {
    this.listEmpleados = this._empleadoService.getEmpleados();

    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Está seguro que desea eliminar el empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue eliminado con éxito.', 'X', {
          duration: 3000
        });
      }
    });
  }

  editarEmpleado(index: number) {
    this.cargarEmpleados();
  }
}
