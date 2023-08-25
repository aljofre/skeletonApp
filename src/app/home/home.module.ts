import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // Asegúrate de que esto está importado y declarado aquí
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
