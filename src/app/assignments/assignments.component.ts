import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement1 {
  'bank_name': string;
  'ifsc': string;
  'bank_id': string;
  'branch': string
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
  displayedYearColumns: string[] = ['bank_name', 'ifsc', 'bank_id', 'branch'];
  groupdataSource = new MatTableDataSource(ELEMENT_DATA1);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  MaterialTableComponent: any;
  city;
  yearGroupData = [];
  progressloder = false;
  ELEMENT_DATA1: any;
  cities: Bank[] = [
    { value: 'BANGALORE', viewValue: 'BANGALORE' },
    { value: 'KOLKATA', viewValue: 'KOLKATA' },
    { value: 'CUTTACK', viewValue: 'CUTTACK' },
    { value: 'DELHI', viewValue: 'DELHI' },
  ];
  bankid: any;
  applyFilter(filterValue: string) {
    this.groupdataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.bankid = this.route.snapshot.params.bank_id;
  }

  ngOnInit() {
  }
  settingBankData(city) {

    this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=' + city).subscribe(data => {
      console.log('data', data)
      this.yearGroupData.push(data)
      console.log("schools within fn", this.yearGroupData)
      for (var i = 0; i < this.yearGroupData.length; i++) {
        this.ELEMENT_DATA1 = this.yearGroupData[i]
      }
      this.progressloder = false

      this.groupdataSource = new MatTableDataSource<PeriodicElement1>(this.ELEMENT_DATA1);
      console.log(this.groupdataSource)
      this.groupdataSource.paginator = this.paginator;
      this.groupdataSource.sort = this.sort;
    },

      err => {
        this.progressloder = false
        alert('something went wrong')
        // console.log("error", err)
      })
  }
  clickBankData1() {

  }
}
