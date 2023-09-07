import { Component } from '@angular/core';
import { ActionSheetController, AlertController, Animation, AnimationController } from '@ionic/angular';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: Date | null = null; // Inicializa fechaNacimiento con null

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private animationCtrl: AnimationController
  ) {}

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = null;
  
    const slideInAnimation = this.createSlideInAnimation();
    
    if (slideInAnimation) {
      slideInAnimation.play();
    }
  }
  

  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre}<br>Apellido: ${this.apellido}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private createSlideInAnimation(): Animation | null {
    const nombreInput = document.querySelector('.nombre-input');
    
    if (!nombreInput) {
      return null;
    }
  
    const animation = this.animationCtrl.create()
      .addElement(nombreInput)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
  
    return animation;
  }
  
}
