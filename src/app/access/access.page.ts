import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

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

  constructor(public actionSheetController: ActionSheetController) { }


  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'elije modelo de GPS',
      buttons: [{
        text: 'GV55',
        handler: () => {
          console.log('gv55 comandos..');
        }
      }, {
        text: 'GV75',
        handler: () => {
          console.log('gv75 comandos..');
        }
      }, {
        text: 'GV300',
        handler: () => {
          console.log('gv300 comandos..');
        }
      }]
    });
    await actionSheet.present();
  }
  

  }

