import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Worked } from 'src/app/Dominios/Worked';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-worked',
  templateUrl: './editar-worked.component.html',
  styleUrls: ['./editar-worked.component.css']
})
export class EditarWorkedComponent {

  constructor(private router: Router, private service: ServicioService) { }
  work: Worked = new Worked();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id=localStorage.getItem("id");
    this.work.id =+ Number(id);
    this.service.buscarWorked(this.work).subscribe(data =>{
      this.work = data;
    });
  }

  Editar(){
    this.service.editarWorked(this.work).subscribe(data => {
     
      this.router.navigate(["listarW"]);
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'REGISTRO EDITADO',
      showConfirmButton: false,
      timer: 2500
    })
    

  }

  Listar(){
    this.router.navigate(["listarW"])
  }
}
