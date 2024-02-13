import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {ControlMaterial} from "../../../ui-component/ControlMaterial";
import {DataTableComponent} from "../../../shared/components/data-table/data-table.component";
import {CurrencyPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {ModalWrapperComponent} from "../../../shared/components/modal-wrapper/modal-wrapper.component";
import {AlertComponent} from "../../../shared/components/alert/alert.component";
import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective
} from "@coreui/angular";
import {SpinnerComponent} from "../../../shared/components/spinner/spinner.component";
import {CdkOption} from "@angular/cdk/listbox";
import {ReceiptComponent} from "./pages/receipt.component";

export const routes: Routes = [
  {
    path: '',
    component: ReceiptComponent,
  },
];

@NgModule({
  declarations: [
    ReceiptComponent,
    ReceiptComponent,
    ReceiptComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    MatTableModule,
    ControlMaterial,
    DataTableComponent,
    NgForOf,
    ModalWrapperComponent,
    ReactiveFormsModule,
    AlertComponent,
    CurrencyPipe,
    NgIf,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    SlicePipe,
    SpinnerComponent,
    DropdownComponent,
    CdkOption,
    DropdownItemDirective,
    DropdownMenuDirective,
  ]
})

export class ReceiptModule {

}
