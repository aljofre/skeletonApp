import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
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
      ]),
      trigger('shakeAnimation', [
        state('inactive', style({
          transform: 'translateX(0)'
        })),
        state('active', style({
          transform: 'translateX(0)'
        })),
        transition('inactive => active', [
          animate('500ms ease-in-out', style({
            transform: 'translateX(5px)'
          })),
          animate('500ms ease-in-out', style({
            transform: 'translateX(-5px)'
          })),
          animate('500ms ease-in-out', style({
            transform: 'translateX(0)'
          }))
        ])
      ])
    ]
  })

export class LoginComponent {
    user: { usuario: string, password: string } = { usuario: '', password: '' };
    titleState = 'center';
    shakeState: string = 'inactive';

    animateTitle() {
        if (this.titleState === 'center') {
          this.titleState = 'right';
        } else if (this.titleState === 'right') {
          this.titleState = 'left';
        } else {
          this.titleState = 'center';
        }
      }

      onInputCleared() {
        this.shakeState = 'active';
        setTimeout(() => this.shakeState = 'inactive', 1500); // Restablecer después de 1.5 segundos
      }

      validateInputs() {
        const userRegex = /^[a-zA-Z0-9]{3,8}$/;
        const passRegex = /^\d{4}$/;
    
        if (!userRegex.test(this.user.usuario)) {
          alert('Usuario no válido. Debe ser alfanumérico y tener entre 3 y 8 caracteres.');
          this.shakeState = 'active';
          setTimeout(() => this.shakeState = 'inactive', 1500);
          return false;
        }
        if (!passRegex.test(this.user.password)) {
          alert('Contraseña no válida. Debe ser numérica y tener exactamente 4 dígitos.');
          this.shakeState = 'active';
          setTimeout(() => this.shakeState = 'inactive', 1500);
          return false;
        }
    
        return true;
      }


      autenticar() {
        if (!this.validateInputs()) return;
    
        if (this.user.usuario === "admin" && this.user.password === "1234") {
          alert("¡Autenticación exitosa!");
          this.router.navigate(['/home']);
        } else {
          alert("Usuario o contraseña incorrectos. Intente nuevamente.");
          this.shakeState = 'active';
          setTimeout(() => this.shakeState = 'inactive', 1500);
        }
      }
    
      constructor(private router: Router) {}
    }