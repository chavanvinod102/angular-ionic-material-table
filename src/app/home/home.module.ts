import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AgGridModule } from 'ag-grid-angular';
import { HomePageRoutingModule } from './home-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { NotificationComponent } from 'src/app/notification/notification.component';
import { GridOrderStatusComponent } from 'src/app/grid-order-status/grid-order-status.component';
import { PivotGridComponent } from 'src/app/pivot-grid/pivot-grid.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AgGridModule,
    HttpClientModule,
  ],
  declarations: [HomePage, NotificationComponent, GridOrderStatusComponent, PivotGridComponent]
})
export class HomePageModule {}
