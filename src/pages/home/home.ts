import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // private childWindow;

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {
   // this.listenBrowser();

  }
 /* listenBrowser()
{
window.addEventListener(“message”, (e) => {
try {
this.childWindow.close();
self.close();
} catch (error) {
console.log(error);
}
}, false);
}*/
  ngOnInit(){

    const browser = this.iab.create('https://www.javatpoint.com/','_blank',{hideurlbar:'yes',footer:'yes',closebuttoncaption:'back'});
    
    }
  
}
