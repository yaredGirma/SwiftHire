import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from "../services/auth.service";

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'

import { JobService } from '../services/job.service';
//import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
//import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-near',
  templateUrl: './near.component.html'
})
export class NearComponent implements OnInit {

  lat: Number;
  long: Number;

  public subscription: Subscription;
  public jobs:{};

  //public loginuser = JSON.parse(localStorage.getItem('profile')).email;

  //myForm: FormGroup;
  constructor(private jobService: JobService) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log(this.lat);
      });
    }

    console.log('before get ten'+this.lat);
    this.jobService.getTenJob(this.long,this.lat).map(data=> this.jobs = data);
    console.log(this.jobs)

  }
  
  ngOnInit() {
  }

}
