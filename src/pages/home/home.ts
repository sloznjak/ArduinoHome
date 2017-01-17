import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {LightsPage} from "../lights/lights";
import {SecurityPage} from "../security/security";
import {TemperaturePage} from "../temperature/temperature";
import {HumidityPage} from "../humidity/humidity";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private doorStatus:boolean = true;

    constructor(public navCtrl: NavController) {

    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

    temperature(){
        this.navCtrl.push(TemperaturePage);
    }

    humidity(){
        this.navCtrl.push(HumidityPage);
    }

    lights(){
        this.navCtrl.push(LightsPage);
    }

    security(){
        this.navCtrl.push(SecurityPage);
    }
}
