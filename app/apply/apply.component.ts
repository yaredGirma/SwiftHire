import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'

import { JobService } from '../services/job.service'
import { UserService } from '../services/user.service'
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Rx";
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html'
})
export class ApplyComponent implements OnInit {
  private id;
  public subscription: Subscription;
  public job;
  public user;
  private wattingList : object[];

  public loginuser =JSON.parse(localStorage.getItem('profile')).email;

  myForm: FormGroup;
  constructor(private authService:AuthService, private activatedroute: ActivatedRoute,private jobService: JobService, private userService: UserService, private formBuilder: FormBuilder) {
  //this.job='';
    
    
    this.subscription = this.activatedroute.params.subscribe(param => {

      this.id = param['id'];

this.job=this.jobService.getOne (this.id)  ;

    
   });

    this.user = this.userService.getOne(this.loginuser);

    
   
    
    // this.myForm = formBuilder.group({
    //   'name': this.job['name'],
    //   'description': this.job['description'],
    //   'category': this.job['category'],
    //   'duration': this.job['duration'],
    //   'hourlyFee': this.job['hourlyFee'],
    //   'preferredDateTime': this.job['preferredDateTime'],
    //   'DurationPerHour': this.job['DurationPerHour'],
    //   wattingList: [this.job['wattingList']]
    // })
   
  
  }
//   onSubmit() {
//     //console.log(this.job['wattingList'])
   

//  this.job['wattingList'].push(this.user);
//     this.jobService.save(this.job).subscribe((data) => {
//     });
//   }
  ngOnInit() {
  }

}
