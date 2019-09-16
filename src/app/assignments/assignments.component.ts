import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
declare var $: any;
declare var jQuery: any;
export interface PeriodicElement1 {
  'bank_name': string;
  'ifsc': string;
  'bank_id': string;
  'branch': string;
}
export interface Bank {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [];

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  displayedYearColumns: string[] = ['action', 'bank_name', 'ifsc', 'bank_id', 'branch'];
  groupdataSource = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  selection = new SelectionModel<PeriodicElement1>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('button') button: ElementRef;
  MaterialTableComponent: any;
  city = 'CUTTACK';
  bankGroupData = [];
  previousSelected = [];
  public progressloder: boolean = false;
  ELEMENT_DATA1: any;
  tabledata = []
  cities: Bank[] = [
    { value: 'BANGALORE', viewValue: 'BANGALORE' },
    { value: 'KOLKATA', viewValue: 'KOLKATA' },
    { value: 'CUTTACK', viewValue: 'CUTTACK' },
    { value: 'DELHI', viewValue: 'DELHI' },
    { value: 'MUMBAI', viewValue: 'MUMBAI' },
  ];
  bankid: any;
  item: any;
  saveData = [];
  nameAlreadyExist: boolean;

  applyFilter(filterValue: string) {
    this.groupdataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient, private router: Router) {

    this.settingBankData(this.city)
  }

  getstorage(data: any) {
    let saveData = localStorage.getItem('favorites')
    this.saveData = JSON.parse(saveData)
    if (!!this.saveData) {
      let s = this.saveData.findIndex(item => (item.ifsc === data.ifsc))
      if (s >= 0) {
        return true
      }
    }

    return false
  }

  ngOnInit() {
    // this.getstorage(null)
  }
  settingBankData(city) {
    console.log('city', city)
    setTimeout(() => {
      this.progressloder = true
      this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=' + city).subscribe(data => {
        // console.log('data', data)
        this.bankGroupData.push(data)
        for (var i = 0; i < this.bankGroupData.length; i++) {
          this.ELEMENT_DATA1 = this.bankGroupData[i]
        }
        this.progressloder = false
        this.groupdataSource = new MatTableDataSource<PeriodicElement1>(this.ELEMENT_DATA1);
        this.groupdataSource.paginator = this.paginator;
        this.groupdataSource.sort = this.sort;
      },

        () => {
          this.progressloder = false
          alert('something went wrong')
          // console.log("error", err)
        })
    }, 1000)
  }

  redirectToDetails = (bankid, bank_name, ifsc, branch) => {
    this.router.navigate(['banks/', bankid])
    this.tabledata.push(bankid, bank_name, ifsc, branch)
    localStorage.setItem('bank', JSON.stringify(this.tabledata))
  }

  toggleSelected(obj) {
    this.previousSelected = []
    let saveData = localStorage.getItem('favorites')
    this.previousSelected = JSON.parse(saveData)
    // console.log(obj);
    if (!!this.previousSelected) {
      let s = this.previousSelected.findIndex(item => (item.ifsc === obj.ifsc))
      // alert(s)
      if (s >= 0) {
        this.previousSelected.splice(s, 1)
      } else {
        this.previousSelected.push(obj)
      }

    } else {
      this.previousSelected.push(obj)
    }


    localStorage.setItem('favorites', JSON.stringify(this.previousSelected))
  }
}
