import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Humidity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-humidity',
  templateUrl: 'humidity.html'
})
export class HumidityPage {
    private toggleFirst: boolean = false;
    private toggleSecond: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumidityPage');
  }

}
