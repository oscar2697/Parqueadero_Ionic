import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  id_vehiculo: string = ''
  vehiculos: any = []

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService,
  ) { 
    this.acceso.getSession('id_vehiculo').then((res: any) => {
      this.id_vehiculo = res
      this.Vervehiculos(this.id_vehiculo)
    })
  }

  ngOnInit() {}

  Vervehiculos(id_vehiculo: string){
    let datos = {
      accion: 'consultar',
      id_vehiculo: id_vehiculo,
    }
    this.acceso.postData(datos).subscribe((res:any) => {
      if(res.estado == true) {
        this.vehiculos = res.datos
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }

  menu() {
    this.navCtrl.navigateRoot(['home'])
  }

  irEditar(id_vehiculo: string) {
    this.navCtrl.navigateRoot(['/vehiculo'])
    this.acceso.createSession('id_vehiculo', id_vehiculo)
  }
}
