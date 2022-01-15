import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp, IHeaderAngularComp } from 'ag-grid-angular';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-pivot-grid',
  template: `
    <div>
      <ion-icon name="add-circle-outline" (click)="openMenu($event)"> </ion-icon>
    </div>
  `,
  styles: [
    `
    `
  ],
})
export class PivotGridComponent implements OnInit, IHeaderAngularComp  {

  params: any;
  constructor(public popoverCtrl: PopoverController) { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  async openMenu(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: NotificationComponent,
        cssClass: 'grid-pivot-popover',
        componentProps: {
          columnApi: this.params.columnApi
        },
        event: ev,
        animated: true,
        showBackdrop: false,
    });
    popover.style.cssText = '--max-width: 200px;--max-height:200px';

    return await popover.present();
  }

  ngOnInit() {}

}