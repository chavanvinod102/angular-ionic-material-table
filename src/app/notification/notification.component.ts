import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  columnList: any;
  columnApi: any;
  tempArr: any;
  constructor(private navParams: NavParams) {
    this.columnApi = this.navParams.data.columnApi;
    this.tempArr = [1,2,3,4,5,6];
   }

  ngOnInit() {
    debugger
    this.createList(this.columnApi.getAllColumns());
  }

  createList(list) {
    this.columnList = [];
    list.forEach((elem: any) => {
      if (elem.colDef.headerName){
        this.columnList.push( {
          colId: elem.colId,
          colDef: elem.colDef,
          visible: elem.visible
        });
      }
    });
  }

  toggleColumn(event, colId) {
    console.log(event.target.checked);
    this.columnApi.setColumnVisible(colId, event.target.checked);
    console.log(colId);
  }

}