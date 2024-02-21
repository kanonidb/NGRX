import {Routes} from '@angular/router';
import {HomeComponent} from './core-components/home/home.component';
import {AboutComponent} from './core-components/about/about.component';
import {ContactComponent} from './core-components/contact/contact.component';
import {LoginComponent} from './auth/components/login/login.component';
import {PagenotfoundComponent} from './globalfeed/pagenotfound/pagenotfound.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'signup', component: SignupComponent, title: 'Signup'},
  {path: '', component: LayoutComponent, 
  children:[
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'contact', component: ContactComponent, title: 'Contact'},
  ]
  },
  {path: '**', component: PagenotfoundComponent, title: 'Page not found'},
];
