import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Examen } from './examen';

@NgModule({
  declarations: [
    Examen,
  ],
  imports: [
    IonicPageModule.forChild(Examen),
  ],
})
export class ExamenModule {}
