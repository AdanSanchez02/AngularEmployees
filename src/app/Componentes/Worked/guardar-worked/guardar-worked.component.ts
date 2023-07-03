import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Worked } from 'src/app/Dominios/Worked';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-worked',
  templateUrl: './guardar-worked.component.html',
  styleUrls: ['./guardar-worked.component.css']
})
export class GuardarWorkedComponent {

  constructor(private router: Router, private service: ServicioService) { }
  work: Worked = new Worked();

  Guardar() {
    this.service.guardarWorked(this.work).subscribe(data => {
      this.router.navigate(["listarW"]);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'REGISTRO DADO DE ALTA',
        showConfirmButton: false,
        timer: 2500
      })
    });
  }

  Listar() {
    this.router.navigate(["listarW"])
  }
}
