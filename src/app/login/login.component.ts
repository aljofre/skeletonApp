import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    usuario: '',
    password: '',
  };

  titleState = 'active';
  shakeState = 'inactive';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  autenticar() {
   
    if (this.user.usuario.length >= 3 && this.user.usuario.length <= 8 && /^\d{4}$/.test(this.user.password)) {
     
      this.navCtrl.navigateForward('/home', {
        state: { user: this.user },
      });
    } else {
     
      this.presentAlert('Error', 'Por favor, ingresa datos válidos.');
    }
  }

  onInputCleared() {
    this.shakeState = 'inactive';
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
