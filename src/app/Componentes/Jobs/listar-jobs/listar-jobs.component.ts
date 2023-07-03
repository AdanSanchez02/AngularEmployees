import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Jobs } from 'src/app/Dominios/Jobs';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-jobs',
  templateUrl: './listar-jobs.component.html',
  styleUrls: ['./listar-jobs.component.css']
})
export class ListarJobsComponent {

  job: Jobs[];
  jb: Jobs = new Jobs();
  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.service.listarJobs().subscribe(data => {
      this.job = data;
      console.log(JSON.stringify(data));
    })
  }

  Guardar() {
    this.router.navigate(["guardarJ"]);
  }

  Editar(job: Jobs) {
    localStorage.setItem("id", job.id.toString());
    this.router.navigate(["editarJ"]);
  }

  Eliminar(job: Jobs) {
    this.jb = job;
    //console.log(job.id);
    Swal.fire({
      title: 'Estas Seguro de eliminar el puesto',
      text: this.jb.name.toString(),
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
        title: 'PUESTO ELIMINADO CORRECTAMENTE',
        showConfirmButton: false,
        timer: 3000
      })
        this.service.eliminarJobs(this.jb).subscribe(data => {
         this.ngOnInit();
        })
      }
    })
  }

}
