import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { CategoryShowPage } from './category-show';

@NgModule({
  declarations: [
    CategoryShowPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryShowPage),
  ],
})
export class CategoryShowPageModule {}
