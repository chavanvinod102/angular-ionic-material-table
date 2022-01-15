import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-order-status',
  templateUrl: './grid-order-status.component.html',
  styleUrls: ['./grid-order-status.component.scss'],
})
export class GridOrderStatusComponent implements OnInit, ICellRendererAngularComp {

  params: any;
  test: boolean = true;
  constructor() { }

  ngOnInit() {}
  agInit(params: any): void {
    this.params = params.value;
    this.test = true;
  }
  refresh(): boolean {
    return false;
  }
  getClassName(params) {
    return params;
  }
  onMoreOptions() {
    alert(1);
  }
  

}
