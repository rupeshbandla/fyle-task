import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css']
})
export class BankdetailsComponent implements OnInit {
  data: any;

  constructor() {
    this.data=JSON.parse(localStorage.getItem('bank'))

    for (var i = 0; i < this.data.length; i++) {
      console.table(this.data[i])
    }
  }

  ngOnInit() {
  }

}
