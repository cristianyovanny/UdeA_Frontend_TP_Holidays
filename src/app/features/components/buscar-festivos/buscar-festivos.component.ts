import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/moduls/referencias-material.module';
import { Festivos } from '../../../core/entidades/Festivos';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-buscar-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './buscar-festivos.component.html',
  styleUrl: './buscar-festivos.component.css'
})
export class BuscarFestivosComponent {
  public year: number= 2024;
  public festivos: Festivos[]= [];
  public columnas = [
    {name: 'Festivo', prop: 'festivo'},
    {name: 'Fecha', prop: 'fecha'}
  ]
  public modoColumna=ColumnMode;
  public tipoSeleccion = SelectionType;
  
  constructor(private servicio:FestivosService) {
    this.listar()
  }

  listar(){
    this.servicio.listar().subscribe({
      next: responde => {
        this.festivos = responde;
        this.festivos.map(f => f.año = f.year);
      },
      error: error => { window.alert(error.message) }
    })
  }

  buscar(){
    if (this.year > 0){
      this.servicio.buscar(this.year).subscribe({
        next: responde => {
          this.festivos = responde;
        },
        error: error => { window.alert(error.message) }
      })
    }
    else{
      this.listar();
    }
  }

}
