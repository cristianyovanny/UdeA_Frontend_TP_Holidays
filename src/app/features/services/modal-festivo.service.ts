import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalFestivoComponent } from '../components/modal-festivo/modal-festivo.component';

@Injectable({
  providedIn: 'root'
})
export class ModalFestivoService {

  constructor(private window: MatDialog) { }

  openModal(message: string) {
    this.window.open(ModalFestivoComponent, {
      width: '250px',
      height: '250px',
      data: { message }
    });
  }

}
