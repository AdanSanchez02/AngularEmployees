import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Dominios/Employees';
import { Jobs } from 'src/app/Dominios/Jobs';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-employees',
  templateUrl: './listar-employees.component.html',
  styleUrls: ['./listar-employees.component.css']
})
export class ListarEmployeesComponent {

  empleado: Employees[];  
  employe : Employees = new Employees();
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.service.listarEmp().subscribe(data => {
      this.empleado = data;
      console.log(JSON.stringify(data));
    })
  }

  Guardar(){
    this.router.navigate(["guardarE"]);
  }

  Editar(empleado: Employees){
    localStorage.setItem("id", empleado.id.toString());
    this.router.navigate(["editarE"]);
  }

  Eliminar(empleado: Employees){
    this.employe = empleado;
    //console.log(empleado.id);
    Swal.fire({
      title: 'Estas Seguro de eliminar al empleado',
      text: this.employe.name.toString() + " " + this.employe.last_name.toString(),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({position: 'center',
        icon: 'success',
        title: 'EMPLEADO ELIMINADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 3000
      })
        this.service.eliminarEmp(this.employe).subscribe(data =>{
          this.ngOnInit();
        })
      }
    })
  }
  
}
