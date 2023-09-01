import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-access',
  templateUrl: 'access.page.html',
  styleUrls: ['access.page.scss'],
  animations: [
    trigger('slideRight', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('moved', style({
        transform: 'translateX(100%)'
      })),
      transition('normal => moved', animate('1000ms')),
      transition('moved => normal', animate('1000ms'))
    ])
  ]
})


export class AccessPage {

  loggedInUser: string = 'Admin'; 
  displayForm: boolean = false;
  animateInput: string = 'normal';
  client = {
    firstName: '',
    lastName: '',
    educationLevel: '',
    birthDate: null
  };

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {}

  showClientForm() {
    this.displayForm = !this.displayForm;
  }

  async showClientDetails() {
    const alert = await this.alertController.create({
      header: 'Detalles del Cliente',
      message: `${this.client.firstName}
                  ${this.client.lastName} 
                   ${this.client.educationLevel} 
                     ${this.client.birthDate}`,
      buttons: ['CERRAR']
    });
    await alert.present();
  }

  clearClientDetails() {
    this.animateInput = 'moved'; 
    setTimeout(() => {
      this.client = {
        firstName: '',
        lastName: '',
        educationLevel: '',
        birthDate: null
      };
      this.animateInput = 'normal'; 
    }, 1000);
  }
  

  saveClient() {
    console.log(this.client);
    
    this.client = {
      firstName: '',
      lastName: '',
      educationLevel: '',
      birthDate: null
    };
    this.displayForm = false;
    this.showSaveSuccessAlert();
  }

  async showSaveSuccessAlert() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Guardado con éxito.',
      buttons: ['CERRAR']
    });
    await alert.present();
  }
}
