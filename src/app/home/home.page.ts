import { Component } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import {OrderImageComponent} from '../order-image/order-image.component';
import {GridMoreOptionsComponent} from '../grid-more-options/grid-more-options.component'
import {GridOrderStatusComponent} from '../grid-order-status/grid-order-status.component'
import {PivotGridComponent} from '../pivot-grid/pivot-grid.component'
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = '';
  frameworkComponents: object;
  columnDefs: any;;
  rowData: any;

  constructor(public http: HttpClient) {
    this.title = 'app';

    this.columnDefs = [
      {
        headerName: '',
        field: 'expand_arrow', 
        pinned: 'left',
        cellRenderer: (params) => {
          return "<img src='/assets/arrow-forward.svg'>"
        },
        width: 23,
        cellStyle: { 'padding': '8px','top': '-4px'},
      },
      {
        headerName: 'Order Id #',
        field: 'order_id', 
        pinned: 'left',
        checkboxSelection:true,
        headerCheckboxSelection: true, 
        cellRenderer: (params) => {
          return '<span class="overview-order-id">' + params.value + '</a>';
        },
        cellStyle: {color: '#358ed7', 'padding-left': '0px'},
        headerClass: "grid-order-column",
        width: 105,
      },
      {
        headerName: '',
        field: 'image_path',
        sortable: false,
        cellRenderer: 'orderImageComponent',
        width: 120
      },
      {
        headerName:'Client', 
        field: 'client_name', 
        sortable: true,
        tooltipField: "Client",
        headerTooltip: "Client",
        width: 120
      },
      {
        headerName: 'Ship From', 
        field: 'ship_from',
        width: 120
      },
      {
        headerName: 'Ship To', 
        field: 'ship_to',
        width: 120
      },
      {
        headerName: 'Address 1',
        field: 'street_1',
        width: 120,
      },
      {
        headerName: 'Address 2',
        field: 'street_2',
        width: 120
      },
      {
        headerName: 'City', 
        field: 'city',
        sortable: true,
        width: 120
      },
      {
        headerName: 'State',
        field: 'state',
        width: 120
      },
      {
        headerName: 'Status',
        field: 'status',
        pinned: "right",
        width: 130,
        cellRenderer: (params) => { 
          switch(params.value) {
            case 'completed' : 
             return "<div class='grid-order-status completed'>" + params.value + "</div>";
            case 'pending' :
            return "<div class='grid-order-status pending'>" + params.value + "</div>";
            case 'in progress' :
            return "<div class='grid-order-status in-progress'>" + params.value + "</div>";
            case 'pick' : 
            return "<div class='grid-order-status pick-in-progress'>" + params.value + "</div>";
            default :
             return '';
          }
        },
      },
      {
        headerName: '',
        headerComponent: 'pivotGridComponent',
        sortable: false,
        field: 'more_options',
        cellRenderer:'moreOptionComponent',
        pinned: 'right',
        width: 50
      },
      {
        headerName:'Client', 
        field: 'client_name', 
        sortable: true,
        tooltipField: "Client",
        headerTooltip: "Client",
        width: 120
      },
      {
        headerName: 'Ship From', 
        field: 'ship_from',
        width: 120
      },
      {
        headerName: 'Ship To', 
        field: 'ship_to',
        width: 120
      },
      {
        headerName: 'Street 1',
        field: 'street_1',
        width: 120,
      },
      {
        headerName: 'Street 2',
        field: 'street_2',
        width: 120
      },
      {
        headerName: 'Incoterm City', 
        field: 'city',
        sortable: true,
        width: 120
      },
      {
        headerName: 'State',
        field: 'state',
        width: 120
      },
    ];

    this.rowData = [
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545815',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545913',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545114',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545425',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8543716',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8542717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8715718',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8845719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8945720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8135721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8145722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8549723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545815',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545913',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545114',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545425',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8543716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8542717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8715718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8845719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8945720',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8135721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8145722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8549723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Oregon", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Oregon", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Oregon", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Oregon", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545815',image_path:'/assets/phone.svg',  client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545913',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545114',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545425',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8543716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8542717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8715718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8845719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Texas", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8945720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8135721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8145722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8549723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Oregon", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Chicago", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545815',image_path:'/assets/phone.svg',  client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545913',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545114',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545425',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8543716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8542717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8715718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8845719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8945720',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "New York", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8135721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8145722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8549723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545712',image_path:'/assets/phone.svg',  client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "pending",more_options:"" },
      { expand_arrow:'' , order_id: '8545713',image_path:'/assets/shapes.svg', client_name: 'kelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545714',image_path:'/assets/phone.svg', client_name: 'melica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545715',image_path:'/assets/phone.svg', client_name: 'telica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545716',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545717',image_path:'/assets/phone.svg', client_name: 'uelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "California", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545718',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545719',image_path:'/assets/phone.svg', client_name: 'Celica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pick",more_options:""},
      { expand_arrow:'' , order_id: '8545720',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545721',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "completed",more_options:""},
      { expand_arrow:'' , order_id: '8545722',image_path:'/assets/phone.svg', client_name: 'nelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Houston", state: "MH",status: "in progress",more_options:""},
      { expand_arrow:'' , order_id: '8545723',image_path:'/assets/phone.svg', client_name: 'pelica', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Pune", state: "MH",status: "pending",more_options:""},
      { expand_arrow:'' , order_id: '8545724',image_path:'/assets/phone.svg', client_name: 'Google', ship_from: "ASPGS", ship_to:"Raw M",street_1: "abc", street_2: "xyz", city: "Los Angeles", state: "MH",status: "pick",more_options:""}

    ];
    this.frameworkComponents = {
      orderImageComponent: OrderImageComponent,
      moreOptionComponent: GridMoreOptionsComponent,
      gridOrderStatusComponent:GridOrderStatusComponent,
      pivotGridComponent: PivotGridComponent
    };
  }

  onBtnClick = () => {
   console.log("Btn clicked");
  }
  modelUpdateted = () =>  {
    console.log("updated");
  }
  onCellClicked = () => {
    console.log("cell clicked");
  }
  onSortChange(e) {
    debugger
  }

  onOrderId() {
    alert("item clicked")
  }
  onViewCellClicked(event: any) {
    alert("View cell clicked")
  }

}
