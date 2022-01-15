import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-option-popover',
  templateUrl: './more-option-popover.component.html',
  styleUrls: ['./more-option-popover.component.scss'],
})
export class MoreOptionPopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onDeleteOrder() {
    alert("Delete");
  }

  onEditOrder() {
    alert("Edit");
  }

}
