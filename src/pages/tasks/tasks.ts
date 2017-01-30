import { Component } from '@angular/core';

import {NavController, ModalController, ToastController} from 'ionic-angular';
import {AddTaskPage} from "../add-task/add-task";

@Component({
    selector: 'page-tasks',
    templateUrl: 'tasks.html'
})
export class TasksPage {
    private toggleFirst: boolean = true;
    private toggleSecond: boolean = true;


    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public toastCtrl: ToastController) {

    }



    addTask(){
        let modal = this.modalCtrl.create(AddTaskPage);
        modal.present();
    }

    done(item){
        item.close();
        this.presentToast("Item is done!");
    }

    delete(item){
        item.close();
        this.presentToast("Item is deleted!");
    }

    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
