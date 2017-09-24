import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { JobService } from '../services/job.service';

import { Subscription } from 'rxjs/Rx'
import { Observable } from "rxjs/Rx";


@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: []
})
export class SearchjobComponent implements OnInit {
     myForm: FormGroup;
  public subscription: Subscription;
  public jobs;
  public inputvale;
  public category;

  public loginuser = JSON.parse(localStorage.getItem('profile')).email;


constructor(private jobService: JobService, private formBuilder: FormBuilder, private auth: AuthService) {
     this.jobService.getAll()
    .subscribe(data=>this.jobs=data);
    this.myForm = formBuilder.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'category': ['', [Validators.required]],
      'hourlyFee': ['', [Validators.required]],
      
    });
   
  }

  ngOnInit() {
    
  }
  onSubmit() {
    this.jobService.getByMinFeeJob(this.myForm.value.hourlyFee)
    .subscribe(data=>this.jobs=data);
    console.log( this.jobs.JSON + "on submit fun");
    
  }
  //fee is the input text filed and it should be fee.value
  findByMinFee(hourlyFee) {
    
    console.log(this.myForm['hourlyFee'] + "on min fee fun")
  }
  //fee is the selected category and it should be category.selected
  findByCategory(c) {
    this.jobService.getByCategory(this.myForm.value.category)
    .subscribe(data=>this.jobs=data);
    console.log(this.jobs)
  }


}





