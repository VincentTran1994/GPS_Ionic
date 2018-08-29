import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';
import { FcmProvider } from '../providers/fcm/fcm';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CategoryShowPage } from '../pages/category-show/category-show';
import { MenuShowPage } from '../pages/menu-show/menu-show';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategogieService } from './services/categogie.service';
import { CatelogyImagesProvider } from './services/catelogy-images';
import { MeduShowPage } from '../pages/medu-show/medu-show';
import { Push } from '../../node_modules/@ionic-native/push';
import { EmailComposer } from '../../node_modules/@ionic-native/email-composer';



const fireBaseConfig = {
  apiKey: "AIzaSyB_qw1TkFV3bkpNNdN_NsQ7drJBM4hzSqU",
  authDomain: "gpsmobile-b743e.firebaseapp.com",
  databaseURL: "https://gpsmobile-b743e.firebaseio.com",
  projectId: "gpsmobile-b743e",
  storageBucket: "gpsmobile-b743e.appspot.com",
  messagingSenderId: "798190472120"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoryShowPage,
    MeduShowPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CategoryShowPage,
    MenuShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    CategogieService,
    InAppBrowser,
    CatelogyImagesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FcmProvider,
    Push,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
