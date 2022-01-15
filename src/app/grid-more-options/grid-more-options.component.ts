import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { PopoverController } from '@ionic/angular';
//import { PopoverController } from 'ionic-angular';
import { MoreOptionPopoverComponent } from '../more-option-popover/more-option-popover.component';

@Component({
  selector: 'app-grid-more-options',
  template: `
   <ion-icon name="ellipsis-vertical-outline" (click)="presentPopover($event)"> </ion-icon>
  `,
  styles: [

  ],
})
export class GridMoreOptionsComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}
  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MoreOptionPopoverComponent,
      cssClass: 'grid-more-options-popover',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
