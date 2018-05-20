import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private router: Router,
              private angularFireAuth:AngularFireAuth) {}
    // {
    //   this.angularFireAuth.authState.subscribe(user=>{
    //     if(user!=null){
    //       this.router.navigate([''])
    //     }else{
    //       this.router.navigate([''])
    //     }
        
    //   })
    //  }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0)
    // });
  }
  title = 'app';
}
