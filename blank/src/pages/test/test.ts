import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Examen } from '../examen/examen';


/**
 * Generated class for the AcercadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class Test {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToExamen(){
    this.navCtrl.push(Examen);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad testPage');
  }

}
