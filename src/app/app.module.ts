import { LoggedInPage } from './../pages/logged-in/logged-in';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

  const firebase = {
    apiKey: "AIzaSyBmJg3uArLky4538z2pVanpVTgRQ9-vLsA",
    authDomain: "test-project-347aa.firebaseapp.com",
    databaseURL: "https://test-project-347aa.firebaseio.com",
    projectId: "test-project-347aa",
    storageBucket: "test-project-347aa.appspot.com",
    messagingSenderId: "624170437268"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    LoginPage,
    RegisterPage,
    LoggedInPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebase),
        AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoggedInPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
