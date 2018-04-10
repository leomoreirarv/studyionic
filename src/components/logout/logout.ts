import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout',
  template: ''
})
export class LogoutComponent {

  constructor(public navCtrl: NavController) {
    this.gotoLogin();
  }

  gotoLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
}
