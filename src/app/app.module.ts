import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Se agregan manualmente estas importaciones se agregarn para el consumo de nuestros servicios
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//////////////////////////////////////////
import { ListarJobsComponent } from './Componentes/Jobs/listar-jobs/listar-jobs.component';
import { GuardarJobsComponent } from './Componentes/Jobs/guardar-jobs/guardar-jobs.component';
import { EditarJobsComponent } from './Componentes/Jobs/editar-jobs/editar-jobs.component';
import { EliminarJobsComponent } from './Componentes/Jobs/eliminar-jobs/eliminar-jobs.component';
//
import { ListarEmployeesComponent } from './Componentes/Employees/listar-employees/listar-employees.component';
import { GuardarEmployeesComponent } from './Componentes/Employees/guardar-employees/guardar-employees.component';
import { EliminarEmployeesComponent } from './Componentes/Employees/eliminar-employees/eliminar-employees.component';
import { EditarEmployeesComponent } from './Componentes/Employees/editar-employees/editar-employees.component';
//
import { ListarWorkedComponent } from './Componentes/Worked/listar-worked/listar-worked.component';
import { GuardarWorkedComponent } from './Componentes/Worked/guardar-worked/guardar-worked.component';
import { EditarWorkedComponent } from './Componentes/Worked/editar-worked/editar-worked.component';
import { EliminarWorkedComponent } from './Componentes/Worked/eliminar-worked/eliminar-worked.component';
import { GuardarComponent } from './Componentes/Contacto/guardar/guardar.component';
///

@NgModule({
  declarations: [
    AppComponent,
    ListarJobsComponent,
    GuardarJobsComponent,
    EditarJobsComponent,
    EliminarJobsComponent,
    ListarEmployeesComponent,
    GuardarEmployeesComponent,
    EliminarEmployeesComponent,
    EditarEmployeesComponent,
    ListarWorkedComponent,
    GuardarWorkedComponent,
    EditarWorkedComponent,
    EliminarWorkedComponent,
    GuardarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
