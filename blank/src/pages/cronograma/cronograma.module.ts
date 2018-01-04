import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cronograma } from './cronograma';

@NgModule({
  declarations: [
    Cronograma,
  ],
  imports: [
    IonicPageModule.forChild(Cronograma),
  ],
})
export class CronogramaModule {}
