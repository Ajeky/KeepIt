import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotasService } from '../services/notas.service';
import { Nota } from '../models/nota.interface';

@Component({
  selector: 'app-crear-nota-dialog',
  templateUrl: './crear-nota-dialog.component.html',
  styleUrls: ['./crear-nota-dialog.component.scss'],
})
export class CrearNotaDialogComponent implements OnInit {
  nota: Nota;

  constructor(
    public modalController: ModalController,
    public notasServicio: NotasService
  ) { }

  ngOnInit() {}

  cerrar() {
    this.modalController.dismiss();
  }
}
