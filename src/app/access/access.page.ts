import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: 'access.page.html',
  styleUrls: ['access.page.scss']
})
export class AccessPage {

  loggedInUser: string = 'Usuario01'; 
  displayForm: boolean = false;
  animateInput: boolean = false;
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
      message: `${this.client.firstName} ${this.client.lastName}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  clearClientDetails() {
    this.animateInput = true;
    setTimeout(() => {
      this.animateInput = false;
    }, 1000);

    this.client = {
      firstName: '',
      lastName: '',
      educationLevel: '',
      birthDate: null
    };
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

  // Método para mostrar el alerta después de guardar.
  async showSaveSuccessAlert() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Guardado con éxito.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
