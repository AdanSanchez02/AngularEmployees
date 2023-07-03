import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/Dominios/Jobs';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-jobs',
  templateUrl: './editar-jobs.component.html',
  styleUrls: ['./editar-jobs.component.css']
})
export class EditarJobsComponent {

  constructor(private router: Router, private service: ServicioService) { }
  job: Jobs = new Jobs();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id=localStorage.getItem("id");
    this.job.id =+ Number(id);
    this.service.buscarJobs(this.job).subscribe(data =>{
      this.job = data;
    });
  }
  Editar() {
    //console.log("los valores son: " + JSON.stringify(this.job));
    //solicitar el servicio
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'SE EDITO CORRECTAMENTE EL PUESTO',
      showConfirmButton: false,
      timer: 2500
    })
    this.service.editarJobs(this.job).subscribe(data => {
      this.router.navigate(["listarJ"]);
    });
  }

  Listar(){
    this.router.navigate(["listarJ"]);
  }
}
