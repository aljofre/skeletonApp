import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('slideRight', [
      state('initial', style({ transform: 'translateX(0%)' })),
      state('final', style({ transform: 'translateX(100%)' })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ])
  ]
})
export class HomePage {
  user: { usuario: string, password: string } = { usuario: '', password: '' };  // Propiedad para el usuario
  client = {
    firstName: '',
    lastName: '',
    birthDate: null
  };

  animateInput: string = 'initial';  // Controla el estado de la animación

  constructor(
    private actionSheetController: ActionSheetController, 
    private router: Router,
    private alertController: AlertController 
  ) {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (storedUser && storedUser.usuario) {
        this.user = storedUser;
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'AUTOS',
      buttons: [{
        text: 'AUDI A1',
        handler: () => {
          console.log('GO');
        }
      }, {
        text: 'AUDI A6',
        handler: () => {
          console.log('GO');
        }
      }]
    });
    await actionSheet.present();
  }

  async guardar() {
    if (this.client.firstName.trim() === '' || this.client.lastName.trim() === '' || !this.client.birthDate) {
        const alert = await this.alertController.create({
            header: 'Atención',
            message: 'Ingrese datos',
            buttons: ['OK']
        });
        await alert.present();
    } else {
        const alert = await this.alertController.create({
            header: 'Guardado',
            message: 'Datos guardados con éxito!',
            buttons: ['OK']
        });
        await alert.present();
    }
  }

  limpiarInputs() {
    this.client.firstName = '';
    this.client.lastName = '';
    this.client.birthDate = null;


    this.animateInput = 'final';
    setTimeout(() => this.animateInput = 'initial', 1000);
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Información del Cliente',
      message: `
        Nombre: ${this.client.firstName}
        Apellido: ${this.client.lastName} 
        Fecha de Nacimiento: ${this.client.birthDate}
      `,
      buttons: ['OK']
    });
    await alert.present();
  }
}
