import { Injectable } from '@angular/core';
import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Pool } from '../page/model/pool';
import { Profile } from '../page/model/profile';

@Injectable()
export class DataProfileService {

  constructor(private database:AngularFireDatabase) { }

  save(profile:Profile){
    
    return this.database.list('/profile').push(profile);
  }

  saveaddress(pool:Pool){
    return this.database.list('/pool').push(pool);
  }

  list():FirebaseListObservable<Pool[]>{
    return this.database.list('/pool');
  }

}
