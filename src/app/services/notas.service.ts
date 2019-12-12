import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Nota } from '../models/nota.interface';

const nombreColeccion = 'notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private db: AngularFirestore) { }

  public getNotas() {
    return this.db.collection<Nota>(nombreColeccion).snapshotChanges();
  }

  public getNotaById(id: string) {
    return this.db.collection<Nota>(nombreColeccion).doc(id);
  }

  public updateNota(id: string, nota: Nota) {
    return this.db.collection<Nota>(nombreColeccion).doc(id).update(nota)
  }

  public deleteNota(id: string) {
    return this.db.collection<Nota>(nombreColeccion).doc(id).delete();
  }

}
