import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = { email:'email',password:'password'}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private angularFireAuth:AngularFireAuth,
    // private db:AngularFireDatabase,
    
  ) {
                this.toastr.setRootViewContainerRef(vcr)
                this.toastr.success('You are awesome!', 'Wellcom');
  }
    
    ngOnInit() {}
    onClickSubmit(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      
      console.log(res);
      // let angularFireAuth = this.db.list('/users')
      // let ref = this.db.list('/customers')
      // this.timestamp = Date.now();
      // ref.push(this.user);

        this.router.navigate([''])
      }).catch(error=>{
        this.toastr.error(error, 'opps!')
        console.log(error);
        
      })
    };

    // backtologin(){
    //   this.router.navigate([''])
    // }
}
