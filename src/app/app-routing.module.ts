import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      displayName: 'Home',
      permissions: {
        only: ['user']
      }
    }
  },
  {
    path: 'step1',
    component: Step1Component
  },
  {
    path: 'step2',
    component: Step2Component,
    canActivate:  [AuthGuard]
  },
  {
    path: 'authed',
    component: Step1Component
  },
  {
    path: 'login',
    children: []
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
