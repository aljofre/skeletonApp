import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // Asegúrate de que esto está importado y declarado aquí
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
