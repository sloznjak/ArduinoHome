import { Component } from '@angular/core';

import {NavController, ToastController} from 'ionic-angular';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    private togglePssw: boolean = false;
    private username: string = "sloznjak";
    private name: string = "Stjepan";
    private surname: string = "Ložnjak";
    private email: string = "sloznjak@mail.tvz";
    private address: string = "Drežnička cesta 19";
    private phone: string = "0998863005";

    private newPssw: string = "";
    private confPssw: string = "";

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    }

    save(){
        this.presentToast();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Changes are saved!',
            position: 'bottom',
            duration: 2000
        });
        toast.present();
    }
}
