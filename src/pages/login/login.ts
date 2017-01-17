import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {TabsPage} from "../tabs/tabs";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    private username: string;
    private password: string;
    private isError: boolean;
    private loginError: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
        this.isError = false;
        this.loginError = "Invalid username or password!";
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }


    login(){
        if(this.username == "sloznjak" && this.password == "pass"){
            this.isError = false;
            console.log("Login successfull!");
            this.presentLoading();
            this.navCtrl.setRoot(TabsPage);
        }else{
            this.isError = true;
            console.log("Login failed!");
        }
    }

    register(){
        this.navCtrl.push(RegisterPage);
        console.log("Go to register page...");
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
