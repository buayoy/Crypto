import { Component, OnInit } from '@angular/core';
import { Pool } from '../model/pool';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { DataProfileService } from '../../service/data-profile.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})

export class HashComponent implements OnInit {

  minerstatus:Observable<any[]>;
  api = '';
  history:Pool[]=[] ;
  walkername='';
  address='';
  pools:Pool[] = [
    { 
      poolname:'fly',
      urlmining: 'eu1-zcash.flypool.org',
      port:'3333',
      address: '',
      walkername: '',
      walkerpass: 'x',
    },
    { 
      poolname:'nano',
      urlmining: 'zec-eu1.nanopool.org',
      port:'6666',
      address: '',
      walkername: '',
      walkerpass: 'x',
    },
    { 
      poolname:'dwarf',
      urlmining: ' zec-eu1.dwarfpool.com ',
      port: '3333',
      address: '',
      walkername: '',
      walkerpass: 'x',
    }
  ] ;
  constructor(
              private router: Router,
              private angularFireAuth:AngularFireAuth,
              private database:AngularFireDatabase,
              private service:DataProfileService,

  ) {}

  ngOnInit() {
    this.service.list().subscribe(list=>{
      this.history=list

      console.log(this.history);
      
    })
  }

  mining(pool:Pool){
    
    let addresss='miner --server ' + pool.urlmining + ' --port ' + pool.port +' --user ' + this.address+'.'+this.walkername + ' --pass ' + pool.walkerpass
  console.log(addresss);

  this.api=addresss
  let historyPool =  { 
    poolname:pool.poolname,
    urlmining:pool.urlmining,
    port:pool.port,
    address: this.address,
    walkername: this.walkername,
    walkerpass: pool.walkerpass,
  }
  this.service.saveaddress(historyPool)
}





Logout(){
  this.angularFireAuth.auth.signOut();
  this.router.navigate(['/'])
}
}
  // let ref = this.db.list('/customers')
     
  //     ref.push(this.student);

