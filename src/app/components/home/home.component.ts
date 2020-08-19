import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { MatSelect } from '@angular/material/select';
import {  Dist } from "src/app/user";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  

  
   countries: any[] = [
    {value: 1, name: 's'},
    
  ];

  countrie: any[] = [
    
    {value: 1, name: 'd'},
  ];

   states: any[] = [
    {value: 1, name: 'AndhraPradesh', countryId: 's'},
    {value: 2, name: 'Telengana', countryId: 's'},
  ];

  districts: any[] = [
    {value: 'East Godavari', name: 'East Godavari', state: 'AndhraPradesh'},
    {value: 'West Godavari', name: 'West Godavari', state: 'AndhraPradesh'},
    {value: 'Guntur', name: 'Guntur', state: 'AndhraPradesh'},
    {value: 'Krishna', name: 'Krishna', state: 'AndhraPradesh'},
    {value: 'S.P.S. Nellore', name: 'Nellore', state: 'AndhraPradesh'},
    {value: 'Prakasam', name: 'Prakasam', state: 'AndhraPradesh'},
    {value: 'Srikakulam', name: 'Srikakulam', state: 'AndhraPradesh'},
    {value: 'Visakhapatnam', name: 'Visakhapatnam', state: 'AndhraPradesh'},
    {value: 'Vizianagaram', name: 'Vizianagaram', state: 'AndhraPradesh'},
    {value: 'Anantapur', name: 'Anantapur', state: 'AndhraPradesh'},
    {value: 'Chittoor', name: 'Chittoor', state: 'AndhraPradesh'},
    {value: 'Y.S.R. Kadapa', name: 'Kadapa', state: 'AndhraPradesh'},
    {value: 'Kurnool', name: 'Kurnool', state: 'AndhraPradesh'},
    {value: 14, name: 'Adilabad', state: 'Telengana'},
    {value: 15, name: 'Bhadradri Kothagudem', state: 'Telengana'},
    {value: 16, name: 'Hyderabad', state: 'Telengana'},
    {value: 17, name: 'Jagtial', state: 'Telengana'},
    {value: 18, name: 'Jangaon', state: 'Telengana'},
    {value: 19, name: 'Jayashankar Bhupalpally', state: 'Telengana'},
    {value: 20, name: 'Jogulamba Gadwal', state: 'Telengana'},
    {value: 21, name: 'Kamareddy', state: 'Telengana'},
    {value: 22, name: 'Karimnagar', state: 'Telengana'},
    {value: 23, name: 'Khammam', state: 'Telengana'},
    {value: 24, name: 'Mahabubabad', state: 'Telengana'},
    {value: 25, name: 'Mahabubnagar', state: 'Telengana'},
    {value: 26, name: 'Mancherial', state: 'Telengana'},

  ];

url="https://api.covid19india.org/state_district_wise.json";


District =new Dist("","");


  //constructor(private http: HttpClient) { 
   // this.http.get(this.url).subscribe(data=>{
     // console.log(data["Andhra Pradesh"]["districtData"][this.District.ds]);
     // console.log(data["Andhra Pradesh"]["districtData"][this.District.dd]["active"]);
    //});
  //}
  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    let obs = this.http.get(this.url);
    obs.subscribe((data)=>console.log(data["Andhra Pradesh"]["districtData"][this.District.ds]));

  }

  
    

  @ViewChild('matSelect') matSelect: MatSelect;
       //Reference Variable //variable Name //Type

    ngAfterViewInit() {
        this.matSelect.valueChange.subscribe(value => {
           // console.log(value);
        });
      }

      
      
      
 


}