import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Whattomine } from '../page/model/whattomine';
import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';



let root = "https://whattomine.com/coins.json";

@Injectable()
export class WhattomineService {

  constructor(
    private http:HttpClient,
    private database:AngularFireDatabase
  ) { }

  getwhattomine(){
    return this.http.get(root);
    
  }
  save(whattomine:Whattomine){
    
    return this.database.list('/whattomine').push(whattomine);
  }

}
