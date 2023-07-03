import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarJobsComponent } from './Componentes/Jobs/listar-jobs/listar-jobs.component';
import { GuardarJobsComponent } from './Componentes/Jobs/guardar-jobs/guardar-jobs.component';
import { EditarJobsComponent } from './Componentes/Jobs/editar-jobs/editar-jobs.component';
import { EliminarJobsComponent } from './Componentes/Jobs/eliminar-jobs/eliminar-jobs.component';
import { ListarEmployeesComponent } from './Componentes/Employees/listar-employees/listar-employees.component';
import { GuardarEmployeesComponent } from './Componentes/Employees/guardar-employees/guardar-employees.component';
import { EditarEmployeesComponent } from './Componentes/Employees/editar-employees/editar-employees.component';
import { EliminarEmployeesComponent } from './Componentes/Employees/eliminar-employees/eliminar-employees.component';
import { ListarWorkedComponent } from './Componentes/Worked/listar-worked/listar-worked.component';
import { GuardarWorkedComponent } from './Componentes/Worked/guardar-worked/guardar-worked.component';
import { EditarWorkedComponent } from './Componentes/Worked/editar-worked/editar-worked.component';
import { EliminarWorkedComponent } from './Componentes/Worked/eliminar-worked/eliminar-worked.component';
import { GuardarComponent } from './Componentes/Contacto/guardar/guardar.component';

const routes: Routes = [
  // Jobs
  { path: 'listarJ', component: ListarJobsComponent },
  { path: 'guardarJ', component: GuardarJobsComponent },
  { path: 'editarJ', component: EditarJobsComponent },
  { path: 'eliminarJ', component: EliminarJobsComponent },
  // Employees
  { path: 'listarE', component: ListarEmployeesComponent },
  { path: 'guardarE', component: GuardarEmployeesComponent },
  { path: 'editarE', component: EditarEmployeesComponent },
  { path: 'eliminarE', component: EliminarEmployeesComponent },
  // Worked
  { path: 'listarW', component: ListarWorkedComponent },
  { path: 'guardarW', component: GuardarWorkedComponent },
  { path: 'editarW', component: EditarWorkedComponent },
  { path: 'eliminarW', component: EliminarWorkedComponent },
  // Contacto
  { path: 'guardarC', component: GuardarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
