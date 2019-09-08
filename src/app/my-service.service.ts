import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { map, filter } from 'rxjs/operators';
// const setTableData_URL = "https://us-central1-project-304d7.cloudfunctions.net/api2/test1"

// const  getYearGroups_URL = "https://us-central1-project-304d7.cloudfunctions.net/api2/y_groups_new"

// const setclassNames_URL = "https://us-central1-project-304d7.cloudfunctions.net/api2/c_groups1"

// const setSchoolNames_URL ="https://us-central1-project-304d7.cloudfunctions.net/api2/s_names"

// const getStudentNames_URL ="https://us-central1-project-304d7.cloudfunctions.net/api2/students1"

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  error: any;

  constructor(private httpService: Http, private schoolshttpService: Http, private classhttpService: Http) { }

  // getTableData(body) {
   
  //   return this.httpService.post(setTableData_URL,body).map(res => {
  //       console.log("response from api", res)
  //     return res;
  //   },
  //     error => this.error = error)
  //   console.log("error from api", this.error)

  // }

  // getschoolAndYear(){
   
  //   return this.schoolshttpService.get(setSchoolNames_URL).map(res => {
  //       console.log("res",res)
  //     return res;
  //   },
  //   error => this.error = error)
  // console.log("error from api", this.error)
  // }

// class api
  // setSchoolDateAndYearData(body) {
   
  //   return this.classhttpService.post(setclassNames_URL, body).map(res => {
  //       console.log("response in setschooldateand year",res)
  //     return res;
  //   },
  //   err =>{
  //     console.log("error in class api",err)
  //  })
  // }

//yeargroup api
  // setSchoolAndDateData(body) {
  
  //   return this.httpService.post(getYearGroups_URL, body).map(res => {
  //      console.log("res from api",res)
  //     return res as any;
   
  //   },
  //   err =>{
  //      console.log("error in api",err)
  //   })
  // }

  // studentnames and images api

  // getStudentNames(body){
  
  //   return this.httpService.post(getStudentNames_URL,body).map(res => {
  //       console.log("response student",res)
  //     return res as any;
      
  //   },
  //   err =>{
  //      console.log("error in api",err)
  //   })
  // }

}
