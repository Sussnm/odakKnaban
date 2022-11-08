import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  categorias = ['proveedores', 'equipo', 'metas'];
  nombreTarea;
  prioridadTarea;
  fechaTarea;
  categoriaTarea;

taskObject;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

async dismis(){
await this.modalCtrl.dismiss(this.taskObject);

}

seleCategorias(i){
this.categoriaTarea = this.categorias[i];
}

nuevaTarea(){
this.taskObject = ({itemName:this.nombreTarea, itemDueDate: this.fechaTarea,
  itemPriority: this.prioridadTarea, itemCategory:this.categoriaTarea});

  this.dismis();
}
}



