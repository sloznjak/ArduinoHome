import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { SettingsPage } from "../pages/settings/settings";
import {LightsPage} from "../pages/lights/lights";
import {SecurityPage} from "../pages/security/security";
import {RgbLedStripPage} from "../pages/rgb-led-strip/rgb-led-strip";
import {TemperaturePage} from "../pages/temperature/temperature";
import {HumidityPage} from "../pages/humidity/humidity";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";
import {TasksPage} from "../pages/tasks/tasks";
import {AddTaskPage} from "../pages/add-task/add-task";

@NgModule({
    declarations: [
        MyApp,
        TasksPage,
        SettingsPage,
        HomePage,
        TabsPage,
        LoginPage,
        RegisterPage,
        LightsPage,
        SecurityPage,
        RgbLedStripPage,
        TemperaturePage,
        HumidityPage,
        EditProfilePage,
        AddTaskPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        TasksPage,
        SettingsPage,
        HomePage,
        TabsPage,
        LoginPage,
        RegisterPage,
        LightsPage,
        SecurityPage,
        RgbLedStripPage,
        TemperaturePage,
        HumidityPage,
        EditProfilePage,
        AddTaskPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
