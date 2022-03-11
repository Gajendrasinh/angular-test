import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  urlList : any[] = [];
  
  constructor() { }

  urlResultHandler(url:any){
    if(this.urlList.length !== 0){     
      const isURL =  this.urlList.find( _url => _url == url);
      console.log(isURL)
      if(isURL === undefined && this.urlList.length < 10){
        this.urlList.push(url);
      }else if(this.urlList.length == 10){
        this.urlList.splice(0, 1);
        this.urlList.push(url);
      }
    }else{
      this.urlList.push(url)
    }
  }
 
}