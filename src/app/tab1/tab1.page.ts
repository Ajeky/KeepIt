import { Component, OnInit } from '@angular/core';
import { Nota } from '../models/nota.interface';
import { FirestoreResponse } from '../models/firestore-response.interface';
import { NotasService } from '../services/notas.service';
import { createInjectable } from '@angular/compiler/src/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  listaNotas: FirestoreResponse<Nota>[];

  constructor(
    private notasServicio: NotasService
  ) { }

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas() {
    this.notasServicio.getNotas().subscribe(resp => {
      this.listaNotas = [];

      resp.forEach((nota: any) => {
        this.listaNotas.push({
          id: nota.payload.doc.id,
          data: nota.payload.doc.data() as Nota
        });
      });
    });
  }

}
