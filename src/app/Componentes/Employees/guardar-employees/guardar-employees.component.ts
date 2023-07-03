import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Dominios/Employees';
import { Jobs } from 'src/app/Dominios/Jobs';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-employees',
  templateUrl: './guardar-employees.component.html',
  styleUrls: ['./guardar-employees.component.css']
})
export class GuardarEmployeesComponent {

  constructor(private router: Router, private service: ServicioService) { }
  empleado:Employees = new Employees();
  employe: Employees[];  
  job: Jobs[];
  
  ngOnInit(): void {
    this.service.listarEmp().subscribe(data => {
      this.employe = data;
      console.log(JSON.stringify(data));
    })
    this.service.listarJobs().subscribe(data => {
      this.job = data;
      console.log(JSON.stringify(data));
    })
  }
  
  Guardar(){
    this.service.guardarEmp(this.empleado).subscribe(data => {
     
      this.router.navigate(["listarE"]);
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'PUESTO DADO DE ALTA',
      showConfirmButton: false,
      timer: 2500
    })
    

  }

  Listar(){
    this.router.navigate(["listarE"])
  }
  
}
