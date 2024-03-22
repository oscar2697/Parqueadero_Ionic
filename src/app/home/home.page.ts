import { Component } from '@angular/core';
import { AccesoService } from '../service/acceso.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id_vehiculo: string = ''
  txt_placa: string = ''
  txt_modelo: string = ''
  txt_color: string = ''
  txt_entrada: string = ''
  puestos: any = []

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService,
  ) { 
      this.acceso.getSession('id_vehiculo').then((res: any) => {
        this.id_vehiculo = res
    })
  }

  guardar(){
    let datos = {
      accion: 'Ingresar',
      cod_vehiculo: this.id_vehiculo,
      placa: this.txt_placa,
      modelo: this.txt_modelo,
      color: this.txt_color,
      entrada: this.txt_entrada,
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.back()
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }

  Vervehiculos() {
    this.navCtrl.navigateRoot(['vehiculos'])
  }
}
