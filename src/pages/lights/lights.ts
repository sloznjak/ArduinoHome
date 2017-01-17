import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RgbLedStripPage} from "../rgb-led-strip/rgb-led-strip";

/*
 Generated class for the Lights page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-lights',
    templateUrl: 'lights.html'
})
export class LightsPage {
    private kitchen: boolean;
    private livingRoom: boolean;
    private bedRoom: boolean;
    private toilete: boolean;
    private rgbLedStrip: boolean;
    private whiteLedStrip: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad LightsPage');
    }

    rgbLightStrip(){
        this.navCtrl.push(RgbLedStripPage);
    }

}
