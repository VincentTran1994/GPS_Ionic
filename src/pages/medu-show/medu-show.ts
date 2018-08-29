import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { CatelogyImagesProvider } from '../../app/services/catelogy-images';

import * as $ from "jquery";

@IonicPage()
@Component({
  selector: 'page-medu-show',
  templateUrl: 'medu-show.html',
})
export class MeduShowPage {
  public imageSource = {
    imgUrl : []
  }
  public imgs: any;
  public pageTitle: any;
  ngOnInit(): void {

  }

  constructor(private httpClient: CatelogyImagesProvider, private navParams: NavParams){}

  ionViewDidLoad(){
    let url = this.navParams.data as string;
    this.httpClient.getData(url)
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
