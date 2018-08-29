import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// email composer plugin
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public fullName:any;
  public phoneNumber: any;
  public message: any;
  public body:any;

  constructor(public navCtrl: NavController, public emailComposer: EmailComposer) {

  }

  onSubmit(){
    console.log(this.body);

    let email = {
      to: 'vincenttran2601@gmail.com',
      bcc: 'trancongvuit@gmail.com',
      subject: 'A message from' + this.fullName,
      body: this.message,
      isHtml: false,
      app: 'Gmail'
    };
    console.log(email);
    this.emailComposer.open(email);
  }

}
