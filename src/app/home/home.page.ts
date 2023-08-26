import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    ]),

    trigger('inputAnimation', [
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

export class HomePage {
  user: { usuario: string, password: string };

  titleState = 'center';
  nombreState = 'normal';
  apellidoState = 'normal';

  animateTitle() {
    if (this.titleState === 'center') {
      this.titleState = 'right';
    } else if (this.titleState === 'right') {
      this.titleState = 'left';
    } else {
      this.titleState = 'center';
    }
  }

  
  handleInputChange(input: 'nombre' | 'apellido') {
    if (input === 'nombre') {
      this.nombreState = this.nombreState === 'normal' ? 'moved' : 'normal';
    } else if (input === 'apellido') {
      this.apellidoState = this.apellidoState === 'normal' ? 'moved' : 'normal';
    }
  }

  constructor(private router: Router) {
    this.user = { usuario: '', password: '' };
  }

  autenticar() {
    if (this.user.usuario === "admin" && this.user.password === "pswadmin123") {
      alert("¡Autenticación exitosa!");
      this.router.navigate(['/access']);
    } else {
      alert("Usuario o contraseña incorrectos. Intente nuevamente.");
    }
  }
}
