import { LoggedInPage } from './../logged-in/logged-in';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
@ViewChild('username') uname;
@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fire:AngularFireAuth,private alertCtrl:AlertController) {
  }

  alert(message:string){
 let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
    .then(data=>{
      this.alert('Success You are logged in');
      this.navCtrl.push(LoggedInPage);
    }).catch(err=>{
      console.log("Got some error")
      this.alert(err.message);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
