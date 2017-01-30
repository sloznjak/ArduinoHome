import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';

/*
  Generated class for the EditProfile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
    private togglePssw: boolean = false;
    private username: string = "sloznjak";
    private name: string = "Stjepan";
    private surname: string = "Ložnjak";
    private email: string = "sloznjak@mail.tvz";
    private address: string = "Drežnička cesta 19";
    private phone: string = "0998863005";

    private newPssw: string = "";
    private confPssw: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

    save(){
        this.togglePssw = false;
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
