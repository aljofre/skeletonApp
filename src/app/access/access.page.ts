import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-access',
  templateUrl: 'access.page.html',
  styleUrls: ['access.page.scss']
})
export class AccessPage {

  loggedInUser: string = 'Usuario123'; 
  displayForm: boolean = false;
  animateInput: boolean = false; // <-- Esta es la propiedad que faltaba
  client = {
    firstName: '',
    lastName: '',
    educationLevel: '',
    birthDate: null
  };

  constructor(private alertController: AlertController) {}

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
    this.animateInput = true; // Activar la animación.
    
    // Usar setTimeout para resetear la variable después de 1 segundo.
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
    console.log(this.client); // Aquí puedes guardar el cliente en una base de datos o servicio si lo deseas.
    
    // Después de guardar el cliente, reseteamos los valores y ocultamos el formulario.
    this.client = {
      firstName: '',
      lastName: '',
      educationLevel: '',
      birthDate: null
    };
    this.displayForm = false;
  }

  
}
