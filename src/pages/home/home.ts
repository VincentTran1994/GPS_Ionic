import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';

import * as $ from "jquery";
import { CategogieService } from '../../app/services/categogie.service';

import { CategoryShowPage } from '../category-show/category-show';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  // public items : Array<any> = [];
  public listItems = {
    items:[]
  };
  test :string;
  ngOnInit(): void {
    this.httpClient.getData()
      .subscribe(data => {
        const dataSearch = $('li.menu-item-3569', $.parseHTML(data)).children('ul')[0];
        const catalogies = $('li.menu-item-object-albums-category', dataSearch);
        for (var i=0;i<catalogies.length;i++){
          var catalogy = $('a', catalogies[i]);
          //saving catalogy name
          var catalogyName = catalogy[0].innerHTML;
          for(var j = 1 ; j < catalogy.length; j++){
            // catalogy items name and href
            this.listItems.items.push({
              "catelogy": catalogyName,
              //name of item
              "name" : catalogy[j].innerHTML,
              //link to items
              "link" : catalogy[j]["href"]
            });
          }
        }
        // this.items = this.listItems.items;
        // console.log(this.listItems.items);
      });
  }
  

  constructor(public navCtrl: NavController, 
              private httpClient: CategogieService, 
              public popoverCtrl: PopoverController) {

  }

  //push notification
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(ContactPage);
    popover.present({
      ev: myEvent
    });
  }

  onPackagesDetail(data){
    let dataPassing = {
      data : []
    };
    
    for(let i=0 ; i < this.listItems.items.length ; i++){
      if(this.listItems.items[i].catelogy == data){
        dataPassing.data.push(this.listItems.items[i]);
      }
    }
    // console.log(dataPassing.data);
    this.navCtrl.push(CategoryShowPage, dataPassing);
  }
}
