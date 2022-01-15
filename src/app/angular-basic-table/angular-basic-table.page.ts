import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { expandableTableRowAnimation} from '../shared/expandable-table-row.animation';
import { data } from "./data.config"
// import { CdkTable} from '@angular/cdk/table'
// import { CdkTableModule } from '@angular/cdk/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { PopoverController } from '@ionic/angular';
import { GridPivotComponent } from 'src/app/material-grid-pivot/grid-pivot.component';

@Component({
  selector: 'app-angular-basic-table',
  templateUrl: './angular-basic-table.page.html',
  styleUrls: ['./angular-basic-table.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class AngularBasicTablePage implements OnInit {
  expanded: boolean = false;
  columnsToDisplay: any = [];
  initColumns = [];
  selection = new SelectionModel<User>(true, []);

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<lines>>;

  dataSource: MatTableDataSource<User>;
  usersData: any[] = [];
  // columnsToDisplay = ['expandicon','name', 'email', 'phone', 'position', 'weight', 'symbol','test','test1','test2','test3','test4','test5','test6','test7','status'];

  innerDisplayedColumns = [{ 'field': 'itemCode', 'displayName': 'Item Code' },
  { 'field': 'itemName', 'displayName': 'Item Name' },
  { 'field': 'shipingUOM', 'displayName': 'Shiping UOM' },
  { 'field': 'unitCost', 'displayName': 'Unit Cost' },
  { 'field': 'orderQty', 'displayName': 'Order Qty' },
  { 'field': 'availableQty', 'displayName': 'Available Qty' },
  { 'field': 'allocatatedQty', 'displayName': 'Allocatated Qty' },
  ];
  columnKeys: any[] = this.innerDisplayedColumns.map(col => col.field);
  expandedElement: User | null;

  constructor(
    private cd: ChangeDetectorRef,
    public popoverCtrl: PopoverController
  ) {
    this.columnsToDisplay = [
      { "name": "Expandicon", "field": "expandicon", visible: true, allow: false },
      { "name": "Select", "field": "select", visible: true, allow: false },
      { "name": "Order Id", "field": "name", visible: true, allow: true },
      { "name": "Warehouse", "field": "email", visible: true, allow: true },
      { "name": "Phone", "field": "phone", visible: true, allow: true },
      { "name": "Client", "field": "position", visible: true, allow: true },
      { "name": "Ship To", "field": "weight", visible: true, allow: true },
      { "name": "Ship From", "field": "symbol", visible: true, allow: true },
      { "name": "Test", "field": "test", visible: true, allow: true },
      { "name": "Test1", "field": "test1", visible: true, allow: true },
      { "name": "Test2", "field": "test2", visible: true, allow: true },
      { "name": "Test3", "field": "test3", visible: true, allow: true },
      { "name": "Test4", "field": "test4", visible: true, allow: true },
      { "name": "Test5", "field": "test5", visible: true, allow: true },
      { "name": "Test6", "field": "test6", visible: true, allow: true }
      , { "name": "Test7", "field": "test7", visible: true, allow: true },
      { "name": "Status", "field": "status", visible: true, allow: false },
      { "name": "Pivot", "field": "pivot", visible: true, allow: false }
    ]
    this.updateColumnsData();
  }


  ngOnInit() {
    ORDERS.forEach(user => {
      if (user.lines && Array.isArray(user.lines) && user.lines.length) {
        this.usersData = [...this.usersData, { ...user, lines: new MatTableDataSource(user.lines) }];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
  }

  updateColumnsData() {
    this.initColumns = [];
    this.columnsToDisplay.forEach((col) => {
      if (col.visible) {
        this.initColumns.push(col.field);
      }
    });
  }

  toggleRow(element: User) {
    this.expanded = !this.expanded;
    element.lines && (element.lines as MatTableDataSource<lines>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<lines>).sort = this.innerSort.toArray()[index]);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<lines>).filter = filterValue.trim().toLowerCase());
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Selects all rows if they are not all selected; otherwise clear selection.*/

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /* Pivot */

  async openMenu(ev: any) {
    const customizableColumns = this.columnsToDisplay.filter((col) => col.allow);
    const popover = await this.popoverCtrl.create({
      component: GridPivotComponent,

      componentProps: {
        columsList: customizableColumns,
        homeRef: this,
      },
      event: ev,
      animated: true,
      showBackdrop: false,
    });
    popover.style.cssText = '--max-width: 200px; --max-height: 300px';

    return await popover.present();
  }

  toggleColumn(column) {
    const temp = [...this.columnsToDisplay];
    const index = temp.findIndex(col => col.field === column.field);
    temp[index].visible = column.visible;
    this.columnsToDisplay = temp;
    this.updateColumnsData();
  }
  repositionColumns(oldIndex, newIndex) {
    const temp = [...this.columnsToDisplay];
    this.move(temp, oldIndex, newIndex);
    this.columnsToDisplay = temp;
    this.updateColumnsData();
  }

  move(arr, oldIndex, newIndex) {
    while (oldIndex < 0) {
      oldIndex += arr.length;
    }
    while (newIndex < 0) {
      newIndex += arr.length;
    }
    if (newIndex >= arr.length) {
      let k = newIndex - arr.length;
      while ((k--) + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
  }

}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  status: string;
}



export interface User {
  expandicon: string;
  name: string;
  email: string;
  phone: string;
  position: number;
  weight: number;
  symbol: string;
  test: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  status: string;
  lines?: lines[] | MatTableDataSource<lines>;
}

export interface lines {
  itemCode: number;
  itemName: string;
  shipingUOM: string;
  unitCost: string;
  orderQty: number;
  availableQty: number;
  allocatatedQty: number
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  lines?: MatTableDataSource<lines>;
}

const ORDERS = [
  {
    expandicon: '',
    name: "3413455",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10
      },
      {
        itemCode: 234126,
        itemName: 'Apple',
        shipingUOM: 'MA',
        unitCost: '$119999',
        orderQty: 50,
        availableQty: 51,
        allocatatedQty: 11
      },
      {
        itemCode: 234127,
        itemName: 'Apple',
        shipingUOM: 'MA',
        unitCost: '$119999',
        orderQty: 50,
        availableQty: 51,
        allocatatedQty: 11
      },
      {
        itemCode: 234128,
        itemName: 'Iphone',
        shipingUOM: 'MA',
        unitCost: '$119999',
        orderQty: 50,
        availableQty: 51,
        allocatatedQty: 11
      },
      {
        itemCode: 234129,
        itemName: 'Apple',
        shipingUOM: 'MA',
        unitCost: '$119999',
        orderQty: 50,
        availableQty: 51,
        allocatatedQty: 11
      },
      {
        itemCode: 234130,
        itemName: 'Apple',
        shipingUOM: 'MA',
        unitCost: '$119999',
        orderQty: 50,
        availableQty: 51,
        allocatatedQty: 11
      }
    ]
  },
  {
    expandicon: '',
    name: "3413455",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'completed',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      }
    ]
  },
  {
    expandicon: '',
    name: "3413455",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      }
    ]
  },
  {
    expandicon: '',
    name: "3423455",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pending',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      }
    ]
  },
  {
    expandicon: '',
    name: "3423455",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      }
    ]
  },
  {
    expandicon: '',
    name: "3423451",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3425451",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'completed',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3425451",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3225451",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3225451",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3225451",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3125451",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3125451",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pending',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "3125451",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in-progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pending',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pending',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "West Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'completed',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Mason",
    email: "East Houstan",
    phone: "9864785214",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'in-progress',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  },
  {
    expandicon: '',
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pick',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999',
        orderQty: 15,
        availableQty: 50,
        allocatatedQty: 10,
      }
    ]
  },
  {
    expandicon: '',
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187",
    position: 1,
    weight: 1.0079,
    symbol: 'H',
    test: 'test',
    test1: 'test1',
    test2: 'text2',
    test3: 'text3',
    test4: 'text4',
    test5: 'text5',
    test6: 'text6',
    test7: 'text7',
    status: 'pending',
    lines: [
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      },
      {
        itemCode: 234123,
        itemName: 'Iphone X',
        shipingUOM: 'EA',
        unitCost: '$9999'
      }
    ]
  }
];

