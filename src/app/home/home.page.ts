import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  
  // Propiedades para el formulario de cliente
  displayForm = false;
  client = {
    firstName: '',
    lastName: '',
    birthDate: null
  };

  constructor(private actionSheetController: ActionSheetController, private router: Router) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Comandos',
      buttons: [{
        text: 'GV55',
        handler: () => {
          console.log('GV55 clicked');
        }
      }, {
        text: 'GV75',
        handler: () => {
          console.log('GV75 clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  // Método para mostrar el formulario de cliente
  showClientForm() {
    this.router.navigate(['/access']);

    // Si necesitas navegar a otra página cuando hagas clic en "INGRESAR CLIENTE", entonces usa el siguiente código:
    // this.router.navigate(['/access']); // Por ejemplo, si quieres navegar a la página 'access.page.html'.
    // Pero si solo quieres mostrar el formulario en la misma página, no necesitas la navegación.
  }

  // Método para guardar temporalmente el cliente ingresado y ocultar el formulario
  saveClient() {
    console.log('Cliente guardado temporalmente:', this.client);
    this.displayForm = false;
    this.client = { firstName: '', lastName: '', birthDate: null }; // Reset del formulario
  }

  // Otros métodos y lógica pueden seguir aquí...
}
