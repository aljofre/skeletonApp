import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger('titleAnimation', [
      state('center', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('right', style({
        transform: 'translateX(100%)',
        opacity: 0.2
      })),
      state('left', style({
        transform: 'translateX(-100%)',
        opacity: 0.2
      })),
      transition('* => right', animate('2500ms')),
      transition('* => left', animate('2500ms')),
      transition('left => center', animate('2500ms'))
    ])
  ]
})

export class HomePage {
  user: { usuario: string, password: string };
  titleState = 'center';
  animateTitle() {
    if (this.titleState === 'center') {
      this.titleState = 'right';
    } else if (this.titleState === 'right') {
      this.titleState = 'left';
    } else {
      this.titleState = 'center';
    }
  }


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
