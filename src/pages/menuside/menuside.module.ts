import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenusidePage } from './menuside';

@NgModule({
  declarations: [
    MenusidePage,
  ],
  imports: [
    IonicPageModule.forChild(MenusidePage),
  ],
})
export class MenusidePageModule {}
