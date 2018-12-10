
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public searchUri: string = "http://boa.nuestroscursos.net/api/c/repositorio-de-pruebas/resources.json";
  public searchResults;
  public error;
  public curObject;
  constructor(public http: HttpClient) {


  }
  searchObject(query) {
    return new Promise<any>(resolve =>{
    this.http.get(this.searchUri, {
      params: { "(meta)[metadata.technical.format][0]": "video", "(meta)[metadata.technical.format][1]": "audio", "(n)": "25", "(s)": "0", q: query },
      responseType: "json"
    }).subscribe(res => {
      this.searchResults = res;
      resolve(res);
      console.log(res);
    }, (err) => {
      console.log(err);
    });
    });
  }

  getObject(query) {
    return new Promise<any>(resolve => {
      this.http.get(query)
        .subscribe(res => {
          console.log(res);
          //this.curObject = res;
          resolve(res);
        }, (err) => {
          console.log(err);
        })
    });
  }


}
