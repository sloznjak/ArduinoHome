import { Component } from '@angular/core';

import {NavController, App, AlertController, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    private myDate = "01:00";

    constructor(public navCtrl: NavController, public app: App, public alertCtrl: AlertController, public toastCtrl: ToastController) {

    }

    logout(){
        let confirm = this.alertCtrl.create({
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log('Cancle clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Agree clicked');
                        this.app.getRootNav().setRoot(LoginPage);
                    }
                }
            ]
        });
        confirm.present();
    }
    clear(){
        let confirm = this.alertCtrl.create({
            message: 'Are you sure you want clar Temperature and Humidity history?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log('Cancle clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Agree clicked');
                        let toast = this.toastCtrl.create({
                            message: 'Temperature and Humidity history is cleared!',
                            position: 'bottom',
                            duration: 2000
                        });
                        toast.present();
                    }
                }
            ]
        });
        confirm.present();
    }

}
