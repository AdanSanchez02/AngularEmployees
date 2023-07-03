import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Worked } from 'src/app/Dominios/Worked';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-worked',
  templateUrl: './listar-worked.component.html',
  styleUrls: ['./listar-worked.component.css']
})
export class ListarWorkedComponent {
 
  worked: Worked[];
  work: Worked = new Worked();
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.service.listarWorked().subscribe(data => {
      this.worked = data;
      console.log(JSON.stringify(data));
    })
  }

  Guardar(){
    this.router.navigate(["guardarW"]);
  }

  Editar(worked: Worked){
    localStorage.setItem("id", worked.id.toString());
    this.router.navigate(["editarW"]);
  }

  Eliminar(worked: Worked){
    this.work = worked;
    console.log(this.work.id);
    Swal.fire({
      title: 'Estas Seguro de eliminar el registro de: ' + this.work.employees.name.toString(),
      text: "Fecha de: "+ this.work.worked_date.toString(),
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
        title: 'REGISTRO ELIMINADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 3000
      })
        this.service.eliminarWorked(this.work).subscribe(data => {
         this.ngOnInit();
        })
      }
    })
  }

}
