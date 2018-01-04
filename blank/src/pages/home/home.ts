import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Acercade } from '../acercade/acercade';
import { Cronograma } from '../cronograma/cronograma';
import { Test } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAcercade(){
  	this.navCtrl.push(Acercade);
  }

  goToCronograma(){
    this.navCtrl.push(Cronograma);
  }

    goToTest(){
    this.navCtrl.push(Test);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad home');
  }



}
