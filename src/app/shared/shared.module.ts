import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import {CurrencyDirective} from 'src/app/shared/directives/currency.directive';


@NgModule({
  declarations: [
    CurrencyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    FormsModule,

    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class SharedModule {
}
