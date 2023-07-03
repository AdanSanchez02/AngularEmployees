import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jobs } from '../Dominios/Jobs';
import { Employees } from '../Dominios/Employees';
import { Worked } from '../Dominios/Worked';
import { Contacto } from '../Dominios/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { };

  // URLS Y METODOS DE JOBS
  urlListarJ = 'http://localhost:9000/JobsWS/listar';
  urlGuardarJ = 'http://localhost:9000/JobsWS/guardar';
  urlBuscarJ = 'http://localhost:9000/JobsWS/buscar';
  urlEditarJ = 'http://localhost:9000/JobsWS/editar';
  urlEliminarJ = 'http://localhost:9000/JobsWS/eliminar';

  listarJobs() {
    return this.http.get<Jobs[]>(this.urlListarJ);
  }

  guardarJobs(job: Jobs) {
    return this.http.post<Jobs>(this.urlGuardarJ, job);
  }

  buscarJobs(job: Jobs) {
    return this.http.post<Jobs>(this.urlBuscarJ, job);
  }
  editarJobs(job: Jobs) {
    return this.http.post<Jobs>(this.urlEditarJ, job);
  }

  eliminarJobs(job: Jobs){
    return this.http.post<Jobs>(this.urlEliminarJ, job);
  }

  // URLS Y METODOS DE EMPLOYEES
  urlListarE = 'http://localhost:9000/EmployeesWS/listar';
  urlGuardarE = 'http://localhost:9000/EmployeesWS/guardar';
  urlBuscarE = 'http://localhost:9000/EmployeesWS/buscar';
  urlEditarE = 'http://localhost:9000/EmployeesWS/editar';
  urlEliminarE = 'http://localhost:9000/EmployeesWS/eliminar';

  listarEmp() {
    return this.http.get<Employees[]>(this.urlListarE);
  }

  guardarEmp(emp: Employees) {
    return this.http.post<Employees>(this.urlGuardarE, emp);
  }

  buscarEmp(emp: Employees) {
    return this.http.post<Employees>(this.urlBuscarE, emp);
  }
  editarEmp(emp: Employees) {
    return this.http.post<Employees>(this.urlEditarE, emp);
  }

  eliminarEmp(emp: Employees){
    return this.http.post<Employees>(this.urlEliminarE, emp);
  }

  // URLS Y METODOS DE WORKED
  urlListarW = 'http://localhost:9000/WorkedWS/listar';
  urlGuardarW = 'http://localhost:9000/WorkedWS/guardar';
  urlBuscarW = 'http://localhost:9000/WorkedWS/buscar';
  urlEditarW = 'http://localhost:9000/WorkedWS/editar';
  urlEliminarW = 'http://localhost:9000/WorkedWS/eliminar';

  listarWorked() {
    return this.http.get<Worked[]>(this.urlListarW);
  }

  guardarWorked(wor: Worked) {
    return this.http.post<Worked>(this.urlGuardarW, wor);
  }

  buscarWorked(wor: Worked) {
    return this.http.post<Worked>(this.urlBuscarW, wor);
  }
  editarWorked(wor: Worked) {
    return this.http.post<Worked>(this.urlEditarW, wor);
  }

  eliminarWorked(wor: Worked){
    return this.http.post<Worked>(this.urlEliminarW, wor);
  }

  // URL Y METODOS DE CONTACTO
  urlGuardarC = 'http://localhost:9005/Api/ContactoWS/guardar';

  guardarContacto(c: Contacto){
    return this.http.post<Contacto>(this.urlGuardarC, c)
  }
}
