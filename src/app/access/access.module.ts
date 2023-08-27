import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccessPageRoutingModule } from './access-routing.module';
import { AccessPage } from './access.page'; // Corrección aquí
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessPageRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [AccessPage]
})
export class AccessPageModule {}
