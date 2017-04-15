import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  isStarted: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ngAfterViewInit() {
    this.beginAnimateInterval = setInterval(() => {
      this.AnimateBeginFontSize();
    }, 500);
  }

  AnimateBeginFontSize() {
    this.beginFontSize = Math.floor(Math.random() * 200) + 150;
    this.beginFontSize = this.beginFontSize + "%";
    
  }

  BeginIsClicked() {
    this.isStarted = true;
    console.log(this.isStarted);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  ionViewDidLeave() {
    clearInterval(this.beginAnimateInterval);
  }

}
