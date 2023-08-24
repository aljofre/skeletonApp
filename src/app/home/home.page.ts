import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: { usuario: string, password: string };

  constructor() {
    this.user = { usuario: '', password: '' };
  }

  autenticar() {
    if (this.user.usuario === "admin" && this.user.password === "pswadmin123") {
      alert("¡Autenticación exitosa!");
      // Aquí puedes navegar a otra página si lo necesitas
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
  }
}