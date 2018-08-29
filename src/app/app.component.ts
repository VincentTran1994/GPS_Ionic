import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { tap } from 'rxjs/operators';

import { TabsPage } from '../pages/tabs/tabs';
import { FcmProvider } from '../providers/fcm/fcm';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(public platform: Platform,
    statusBar: StatusBar,
    public fcm: FcmProvider,
    public toast: ToastController,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.fcmSetup();
    });
  }

  fcmSetup() {
    //getting token
    this.fcm.getToken();

    //getting notification
    if(this.platform.is('android')||this.platform.is('ios')){
      this.fcm.listenToNotifications().pipe(
        tap(
          msg => {
            console.log(msg);
            this.toast.create(
              {
                message: msg.body,
                duration: 3000            
              }
            ).present();
          }
        )
      ).subscribe();
    }
  }
}
