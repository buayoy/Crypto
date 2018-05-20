import { Component, OnInit } from '@angular/core';
import { Pool } from '../model/pool';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataProfileService } from '../../service/data-profile.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {
  minerstatus:Observable<any[]>;
  pool:Pool = {
    miningtool: '',
    urlmining: '',
    port: '',
    walkername: '',
    walkerpass: '',
  }

  constructor(
              private router: Router,
              private angularFireAuth:AngularFireAuth,
              private database:AngularFireDatabase,
              private service:DataProfileService
  ) {

  }

  ngOnInit() {
  }
mining(pool){
  console.log(pool);
  
  // let ref = this.db.list('/customers')
     
  //     ref.push(this.student);
}
}
