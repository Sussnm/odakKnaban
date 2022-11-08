
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ServiciosDatosService } from 'src/app/services/servicios-datos.service';
import { ModalPage } from '../modal/modal.page';







@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

listaTareas = [];



///Agrego la tarea/////
objetivos: string[]=[];
///en curso///
encurso: string[]=[];

/////terminado
finalizado: string[]=[];

suerte= '';


private slides: any;



  constructor(private fb: FormBuilder,  public modalCtrl: ModalController, private serviciosDatosService: ServiciosDatosService  ) {


  }



  ngOnInit()  {


}





drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}

add(){
if(this.suerte === ''){
  return;
}
  this.objetivos.push(this.suerte);
  this.suerte='';
}


borrar(i: number) {
  this.objetivos.splice(i,1);

}

errase(i: number) {
  this.encurso.splice(i,1);

}
borrarfinal(i: number) {
  this.finalizado.splice(i,1);

}

  async detalle(){
  const modal = await this.modalCtrl.create({
    component: ModalPage

  });

  modal.onDidDismiss().then(newtaskObject=>{
    console.log(newtaskObject.data);
    this.listaTareas.push(newtaskObject.data);
  });
return await modal.present();
  }
}






















