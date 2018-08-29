import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuShowPage } from '../menu-show/menu-show';

/**
 * Generated class for the CategoryShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-show',
  templateUrl: 'category-show.html',
})
export class CategoryShowPage {
  public items : any;
  public title: any;

  constructor(public navCtrl: NavController,
              // private inAppBrowser: InAppBrowser,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //getting data from dataPassing from home.ts
    this.items = this.navParams.get('data');
    this.title = this.items[0].catelogy;
  }

  //on click event
  openInAppBrowser(url){
    // const browser = this.inAppBrowser.create(url);
    this.navCtrl.push(MenuShowPage, url);
    // browser.close();
  }
}
