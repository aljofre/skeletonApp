import { Component } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: 'access.page.html',
  styleUrls: ['access.page.scss']
})
export class AccessPage {

  displayForm: boolean = false;
  client = {
    firstName: '',
    lastName: '',
    birthDate: null
  };

  constructor() {}

  showClientForm() {
    this.displayForm = !this.displayForm;
  }

  saveClient() {
    // Aquí puedes implementar la lógica para guardar el cliente.
    console.log(this.client);
    this.client = {
      firstName: '',
      lastName: '',
      birthDate: null
    };
    this.displayForm = false;
  }

  // Otros métodos y lógica pueden seguir aquí...
}
