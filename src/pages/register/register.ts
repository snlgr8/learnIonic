import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController ,public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }
  alert(message:string){
 let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value).
      then(data => {
        this.alert("You are registered")
      }).catch(err => {
        console.log(err);
        this.alert(err.message);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
