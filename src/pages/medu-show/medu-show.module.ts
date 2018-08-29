import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { MeduShowPage } from './medu-show';
import { CatelogyImagesProvider } from '../../app/services/catelogy-images';

@NgModule({
  declarations: [
    MeduShowPage,
  ],
  imports: [
    IonicPageModule.forChild(MeduShowPage),
  ],
})
export class MeduShowPageModule {

 
}
