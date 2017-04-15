import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Dashboard } from '../dashboard/dashboard'

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  beginFontSize: any;
  beginAnimateInterval: any;
  isStarted: boolean;
  submitAttempt: boolean = false;
  public loginForm;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ngAfterViewInit() {
    this.beginAnimateInterval = setInterval(() => {
      this.AnimateBeginFontSize();
    }, 500);
  }

  AnimateBeginFontSize() {
    this.beginFontSize = Math.floor(Math.random() * 200) + 150;
    this.beginFontSize = this.beginFontSize + "%";
    console.log("animating");
    
  }

  BeginIsClicked() {
    this.isStarted = true;
    console.log(this.isStarted);
  }

  loginUser() {
    this.submitAttempt = true;
    console.log("Loggin in");

    //TODO: Validate users in Firebase, Navigate to Dashboard
    console.log("Email: " + this.loginForm.value.email);
    console.log("Password: " + this.loginForm.value.password);

    // this.navCtrl.push(Dashboard);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  ionViewDidLeave() {
    clearInterval(this.beginAnimateInterval);
  }

}
