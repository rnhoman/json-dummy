import { Component, OnInit } from '@angular/core';
import { Posts } from '../core/clients';
import { ClientService } from '../service/client.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GridOptions } from 'ag-grid';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // client: Clients[];
  // post: Posts[];

  // // constructor(private dataClient: ClientService ) {}
  // private gridApi;
  // private gridColumnApi;

  // // baseUrl = environment.baseUrl;
  // baseDummy = environment.baseDummy;

  // columnDefs = [
  //   // { headerName: 'Company', field: 'company', sortable: true, filter: true },
  //   // { headerName: 'Company Alias', field: 'clientAlias', sortable: true, filter: true },
  //   // { headerName: 'Address', field: 'address', sortable: true, filter: true },
  //   // { headerName: 'Phone', field: 'phone', sortable: true, filter: true }
  //   { headerName: 'No', valueGetter: 'node.id' },
  //   { headerName: 'Title', field: 'title', sortable: true, filter: true },
  //   { headerName: 'Body', field: 'body', sortable: true, filter: true },
  //   // { headerName: 'Phone', field: 'phone', sortable: true, filter: true }
  // ];

  // rowData: any;

  // constructor(private http: HttpClient) {}
  private rowData: Posts[];
  private columnDefs: ColDef[];
  private api: GridApi;
  private columnApi: ColumnApi;
  
  constructor(private dataClient: ClientService) {
    this.columnDefs = this.createColumnDefs();
  }

  // onGridReady(params): void {
  //   this.api = params.api;
  //   this.columnApi = params.columnApi;
  // }
  private createColumnDefs() {
    return [
      { field: 'id', width: 50 },
      { field: 'title', width: 300, editable: true, checkboxSelection: true, sortable: true, filter: true },
      { field: 'body', width: 500, editable: true }
    ]
  }

  ngOnInit() {
    this.dataClient.findAllPosts().subscribe(post => { this.rowData = post}, error=> {console.log(error);})
    // this.rowData = this.http.get<Posts[]>(this.baseDummy + '/posts')
    // this.dataClient.findAllPosts().subscribe(
    //   post => {
    //     this.post = post
    //   },
    //   error => {
    //     console.log(error, "Server error");
    //   }
    // );

  }
}
