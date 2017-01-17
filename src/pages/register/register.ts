import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    private username: string;
    private password: string;
    private name: string;
    private surname: string;
    private email: string;


    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    register(){
        console.log("Register");
        this.presentLoading();
        this.navCtrl.setRoot(TabsPage);
    }

    back(){
        this.navCtrl.pop();
    }

    presentLoading(){
        let loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: "Loading..."
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 3000);
    }

}
