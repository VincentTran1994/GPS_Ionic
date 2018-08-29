import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { MenuShowPage } from './menu-show';

@NgModule({
  declarations: [
    MenuShowPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuShowPage),
  ],
})
export class CategoryShowPageModule {}
