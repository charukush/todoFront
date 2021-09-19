import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { UserLogInComponent } from './user-log-in/user-log-in.component';

const routes: Routes = [
  {path: 'home', component:UserLogInComponent},
  {path: 'myAccount', component:MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
