import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from 'src/app/app.component';
import {NotFoundComponent} from 'src/app/errors/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {
    path: 'errors', children: [
      {path: '404', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
