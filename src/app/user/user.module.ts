import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {UserDetailComponent} from 'src/app/user/user-detail/user-detail.component';
import {UserListComponent} from 'src/app/user/user-list/user-list.component';
import {UserRoutingModule} from 'src/app/user/user-routing.module';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule {
}
