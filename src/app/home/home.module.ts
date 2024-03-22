import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, // Añade HttpClientModule a los imports
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
