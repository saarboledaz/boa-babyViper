import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the ObjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objeto',
  templateUrl: 'objeto.html',
})
export class ObjetoPage {
  objetoA;
  video = false;
  audio = false;
  audioUri = "";
  format;
  keywords;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
    this.objetoA = this.navParams.get('objeto');
    console.log(this.objetoA);
    
    this.keywords = this.objetoA.metadata.general.keywords.none;
    this.keywords.forEach(element => {
      if (element == 'video'){
        this.video = true;
        
      }
    });

    this.keywords.forEach(element => {
      if (element == 'audio'){
        this.audio = true;
        this.audioUri = this.objetoA.about + '/!/' + this.objetoA.manifest.entrypoint;
      }
    });
    this.format = this.objetoA.metadata.technical.format;
    console.log(this.format);
  }

  enviarComentario(){
    
  }

  


}
