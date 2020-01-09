import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PermissionComponent} from 'src/app/admin/permission/permission.component';
import {AdminAccessGuard} from 'src/app/core/guards/admin-access.guard';

const adminRoutes: Routes = [
  {path: '', canActivate: [AdminAccessGuard], component: PermissionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
