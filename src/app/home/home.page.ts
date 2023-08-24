import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: { usuario: string, password: string };

  constructor(private router: Router) {
    this.user = { usuario: '', password: '' };
  }

  autenticar() {
    if (this.user.usuario === "admin" && this.user.password === "pswadmin123") {
      alert("¡Autenticación exitosa!");
      this.router.navigateByUrl('/access');
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
  }
}
