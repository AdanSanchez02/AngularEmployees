import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Dominios/Employees';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-employees',
  templateUrl: './editar-employees.component.html',
  styleUrls: ['./editar-employees.component.css']
})
export class EditarEmployeesComponent {

  constructor(private router: Router, private service: ServicioService) { }
  empleado: Employees = new Employees();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id=localStorage.getItem("id");
    this.empleado.id =+ Number(id);
    this.service.buscarEmp(this.empleado).subscribe(data =>{
      this.empleado = data;
    });
  }
  Editar() {
    this.service.editarEmp(this.empleado).subscribe(data => {

      this.router.navigate(["listarE"]);
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'CAMBIOS GUARDADOS',
      showConfirmButton: false,
      timer: 2500
    })
  }

  Listar() {
    this.router.navigate(["listarE"])
  }

}
