import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from 'src/app/user/user-detail/user-detail.component';
import {UserListComponent} from 'src/app/user/user-list/user-list.component';

const userRoutes: Routes = [
  {
    path: 'users', children: [
      {path: '', component: UserListComponent},
      {path: 'detail', component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
