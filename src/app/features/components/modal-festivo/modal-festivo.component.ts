import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DatosVerificarFestivos {
  message: string;
}

@Component({
  selector: 'app-modal-festivo',
  standalone: true,
  imports: [],
  templateUrl: './modal-festivo.component.html',
  styleUrl: './modal-festivo.component.css'
})
export class ModalFestivoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public datos: DatosVerificarFestivos, public dialogRef: MatDialogRef<ModalFestivoComponent>) { }

  cerrar() {
    this.dialogRef.close();
  }
}
