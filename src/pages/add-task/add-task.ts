import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/*
 Generated class for the AddTask page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-add-task',
    templateUrl: 'add-task.html'
})
export class AddTaskPage {
    public event = {
        month: '2017-01-17',
        timeStarts: '20:00'
    };


    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddTaskPage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    saveTask(){
        this.viewCtrl.dismiss();
    }
}
