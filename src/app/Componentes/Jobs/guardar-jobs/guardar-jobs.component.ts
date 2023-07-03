import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Dominios/Employees';
import { Jobs } from 'src/app/Dominios/Jobs';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-jobs',
  templateUrl: './guardar-jobs.component.html',
  styleUrls: ['./guardar-jobs.component.css']
})
export class GuardarJobsComponent {

  constructor(private router: Router, private service: ServicioService) { }
  job: Jobs = new Jobs();

  Guardar() {
    //console.log("los valores son: " + JSON.stringify(this.job));
    //solicitar el servicio
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'PUESTO DADO DE ALTA',
      showConfirmButton: false,
      timer: 2500
    })
    this.service.guardarJobs(this.job).subscribe(data => {
      this.router.navigate(["listarJ"]);
    });
  }

  Listar(){
    this.router.navigate(["listarJ"]);
  }
}
