import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 Generated class for the Security page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-security',
    templateUrl: 'security.html'
})
export class SecurityPage {
    private motionSensor: boolean;
    private laserTripwire: boolean;
    private doorStatus: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SecurityPage');
    }

}
