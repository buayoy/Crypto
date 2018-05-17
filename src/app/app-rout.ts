import { Routes } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { HomeComponent } from "./page/home/home.component";
import { RegisterComponent } from "./page/register/register.component";
import { ForgotComponent } from "./page/forgot/forgot.component";
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { AccountComponent } from "./page/account/account.component";
import { PoolComponent } from "./page/pool/pool.component";


export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'forgot', component: ForgotComponent },
    { path:'dashboard', component: DashboardComponent },
    { path:'account', component: AccountComponent },
    { path:'pool', component: PoolComponent },
  ];