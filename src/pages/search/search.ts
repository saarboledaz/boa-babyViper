import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ObjetoPage } from '../objeto/objeto';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchString;
  objectsFound;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
    this.objectsFound= [];
  }

  ionViewDidLoad() {
    
  }
  searchObject(){
    this.global.searchObject(this.searchString);
    
  }

  getObjects(ev){
    this.objectsFound = [];
    var val = ev.target.value;

    if (val && val.trim() != ''){
      this.global.searchObject(val).then(data =>{
        this.objectsFound = data;
      })
      
    }

  }

  showObject(objeto){
    console.log(objeto.about);
    
    this.global.getObject(objeto.about)
    .then( data => 
      this.navCtrl.push(ObjetoPage,{
        objeto: data
      })
    );

  }

}
