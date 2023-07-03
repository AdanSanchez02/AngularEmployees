import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudEmployees';

  constructor(private router:Router){}

  listarJ(){
    this.router.navigate(["listarJ"]);
  }

  listarE(){
    this.router.navigate(["listarE"]);
  }

  listarW(){
    this.router.navigate(["listarW"]);
  }

  contacto(){
    this.router.navigate(["guardarC"]);
  }
}
