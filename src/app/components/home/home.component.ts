import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { MatSelect } from '@angular/material/select';




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
    {value: 1, name: 'East Godavari', state: 'AndhraPradesh'},
    {value: 2, name: 'West Godavari', state: 'AndhraPradesh'},
    {value: 3, name: 'Guntur', state: 'AndhraPradesh'},
    {value: 4, name: 'Krishna', state: 'AndhraPradesh'},
    {value: 5, name: 'Nellore', state: 'AndhraPradesh'},
    {value: 6, name: 'Prakasam', state: 'AndhraPradesh'},
    {value: 7, name: 'Srikakulam', state: 'AndhraPradesh'},
    {value: 8, name: 'Visakhapatnam', state: 'AndhraPradesh'},
    {value: 9, name: 'Vizianagaram', state: 'AndhraPradesh'},
    {value: 10, name: 'Anantapur', state: 'AndhraPradesh'},
    {value: 11, name: 'Chittoor', state: 'AndhraPradesh'},
    {value: 12, name: 'Kadapa', state: 'AndhraPradesh'},
    {value: 13, name: 'Kurnool', state: 'AndhraPradesh'},
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


  constructor(private http: HttpClient) { 
    this.http.get(this.url).toPromise().then(data=>{
      console.log(data);
    });
  }
  


    

  @ViewChild('matSelect') matSelect: MatSelect;
       //Reference Variable //variable Name //Type

    ngAfterViewInit() {
        this.matSelect.valueChange.subscribe(value => {
            console.log(value);
        });
      }
 


}