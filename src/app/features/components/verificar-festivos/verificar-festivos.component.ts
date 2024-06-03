import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modules/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { VerificarFestivosService } from '../../services/verificar-festivos.service';
import { Festivos } from '../../../core/entidades/Festivos';
import { MatDialog } from '@angular/material/dialog';
import { ModalFestivoService } from '../../services/modal-festivo.service';

@Component({
  selector: 'app-verificar-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './verificar-festivos.component.html',
  styleUrl: './verificar-festivos.component.css'
})
export class VerificarFestivosComponent {
  public fechaSeleccionada: any;
  constructor(
    private servicio:VerificarFestivosService,
    private servicioModal: ModalFestivoService
  ) { }
  
  verificar(){
    if(!this.fechaSeleccionada){
      window.alert('Debe seleccionar una fecha');
      return;
    }
    let fecha = new Date(this.fechaSeleccionada);
    if(isNaN(fecha.getTime())) {
      window.alert('La fecha seleccionada no es válida');
      return;
    }
    this.servicio.verificar(fecha).subscribe(
      respuesta => {
        window.alert(respuesta);
      },
      error => {
        window.alert(error.message);
      }
    )
  }

}
