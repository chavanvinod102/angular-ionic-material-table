import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-notification',
  templateUrl: './grid-pivot.component.html',
  styleUrls: ['./grid-pivot.component.scss'],
})
export class GridPivotComponent implements OnInit {
  columnsToDisplay = [];
  constructor(private navParams: NavParams) {
    this.columnsToDisplay = this.navParams.data.columsList;
  }

  ngOnInit() {
  }

  createList(list, state) {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.currentIndex === event.previousIndex) {
      return;
    }
    moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex);
    let newIndex = -1;
    const oldIndex = this.navParams.data.homeRef.columnsToDisplay.findIndex(col => col.field === event.item.data.field);
    let elem = this.columnsToDisplay[event.currentIndex - 1];
    if (elem) {
      newIndex = this.navParams.data.homeRef.columnsToDisplay.findIndex(col => col.field === elem.field);
      // newIndex += 1;
    } else {
      elem = this.columnsToDisplay[event.currentIndex + 1];
      newIndex = this.navParams.data.homeRef.columnsToDisplay.findIndex(col => col.field === elem.field);
      // newIndex -= 1;
    }
    this.navParams.data.homeRef.repositionColumns(oldIndex, newIndex);
  }

  onCustomClick(column, index) {
    if (column.pinned) {
      return;
    }
    column.visible = !column.visible;
    this.columnsToDisplay[index] = column;
    this.navParams.data.homeRef.toggleColumn(column);
  }
}
