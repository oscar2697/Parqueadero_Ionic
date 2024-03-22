import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AccesoService } from '../service/acceso.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {
  id_vehiculo: string = ''
  txt_placa: string = ''
  txt_modelo: string = ''
  txt_color: string = ''
  txt_horaentrada: string = ''
  txt_horasalida: string = ''
  puesto: any = []

  constructor(
    public navCtrl: NavController,
    public acceso: AccesoService
  ) { 
    this.acceso.getSession('id_vehiculo').then((res: any) => {
      this.id_vehiculo = res
      this.consultar(this.id_vehiculo)
    })
  }

  ngOnInit() {}

  consultar(id_vehiculo: string) {
    let datos = {
      accion: 'dato_vehiculo',
      id_vehiculo: id_vehiculo
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado == true) {
        this.txt_placa = res.dato[0].placa
        this.txt_modelo = res.dato[0].modelo
        this.txt_color = res.dato[0].color
        this.txt_horaentrada = res.dato[0].entrada
        this.txt_horasalida = res.dato[0].salida
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }

  Actualizar() {
    let datos = {
      accion: 'a_vehiculo',
      id_vehiculo: this.id_vehiculo,
      placa: this.txt_placa,
      modelo: this.txt_modelo,
      color: this.txt_color,
      entrada: this.txt_horaentrada,
      salida: this.txt_horasalida,
    }
    this.acceso.postData(datos).subscribe((res: any) => {
      if(res.estado == true) {
        this.acceso.showToast(res.mensaje)
        this.navCtrl.navigateRoot('/vehiculos')
      } else {
        this.acceso.showToast(res.mensaje)
      }
    })
  }
}
