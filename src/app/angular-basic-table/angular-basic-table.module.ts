import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import { MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from "@angular/material/checkbox"
//import {NgxDataTableModule} from 'ngx-nested-data-table'
// import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { IonicModule } from '@ionic/angular';

import { AngularBasicTablePageRoutingModule } from './angular-basic-table-routing.module';

import { AngularBasicTablePage } from './angular-basic-table.page';
import { GridPivotComponent } from '../material-grid-pivot/grid-pivot.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularBasicTablePageRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    DragDropModule
  ],
  declarations: [AngularBasicTablePage,GridPivotComponent]
})
export class AngularBasicTablePageModule {}
