import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


import * as $ from "jquery";
import { CategogieService } from '../../app/services/categogie.service';

/**
 * Generated class for the MeduShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-show',
  templateUrl: 'menu-show.html',
})
export class MenuShowPage {
  public imageSource = {
    imgUrl : []
  }
  public imgs: any;
  public pageTitle: any;
  ngOnInit(): void {

  }

  constructor(private httpClient: CategogieService, private navParams: NavParams){}

  ionViewDidLoad(){
    let url = this.navParams.data as string;
    this.httpClient.getMoreData(url)
      .subscribe(data => {
        const dataTarget = $(".grid-item-inner",$.parseHTML(data));
        const imagesTarget = $('img', dataTarget);
        for(var i=0 ; i < imagesTarget.length ; i++){
          this.imageSource.imgUrl.push(imagesTarget[i]['src']);
        }
        // console.log(this.imageSource.imgUrl);
        this.imgs = this.imageSource.imgUrl;
        this.pageTitle = $($.parseHTML(data)).filter('title').text();
      });
  }

}
