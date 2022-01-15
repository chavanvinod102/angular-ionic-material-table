import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularBasicTablePage } from './angular-basic-table.page';

const routes: Routes = [
  {
    path: '',
    component: AngularBasicTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularBasicTablePageRoutingModule {}
