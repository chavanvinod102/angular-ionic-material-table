import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-order-image',
  template: `
    <div class="order-image" (click)='onImageClick(e,params.value)'>
      <img [src]="params.value" />
    </div>
  `,
  styles: [
    `
    .order-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .order-image img {
      width: 25px;
      height: 25px;
    }
    `
  ],
})
export class OrderImageComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  ngOnInit() {}

  onImageClick(e, value) {
    debugger
  }

}