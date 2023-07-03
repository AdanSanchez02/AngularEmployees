import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Dominios/Contacto';
import { ServicioService } from 'src/app/Service/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  titulo = 'Formulario para Contactos';
  submitted = false;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    aps: new FormControl('', [Validators.required, Validators.minLength(5)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    fecha: new FormControl('', [Validators.required, Validators.minLength(10)]),
    comentario: new FormControl('', [Validators.required, Validators.maxLength(250)]),
  });

  get f(){ return this.formularioContacto.controls}
   
  constructor(private router: Router, private service: ServicioService) { }
  consulta: Contacto = new Contacto();

  submit(){
    this.submitted = true;
    if(this.formularioContacto.valid){
      this.service.guardarContacto(this.consulta).subscribe(data => {
        this.router.navigate(["listarE"]);
        console.log(this.consulta);
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Consulta enviada',
        showConfirmButton: false,
        timer: 1500
      });
      console.log("valido");
    }else{
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Campos no validos',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    
  }
}
