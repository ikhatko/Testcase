import {NgModule} from '@angular/core';
import {AdminRoutingModule} from 'src/app/admin/admin-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {PermissionComponent} from './permission/permission.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    PermissionComponent,
    AddFormComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
