import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,FormGroupName,Validators,FormControl,NgForm,NgModel} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Response} from "@angular/http"

@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html'
})
export class SubscribeUserComponent implements OnInit {
     private profile;
     private mygroup:FormGroup;
     private isSubscribed=false;
   private respond;
    
  constructor(private _formBuilder:FormBuilder,private userService:UserService) {
    this.profile=JSON.parse(localStorage.getItem('profile'));
     this.mygroup=_formBuilder.group({
       "email":[this.profile.email],
       "name":[this.profile.name],
        "status":[]
       
     });
   }

  ngOnInit() {
    this.profile=JSON.parse(localStorage.getItem('profile'));
  }

onSubmit(){
this.respond=new Promise((resolve,reject)=>{
       this.userService.save(this.mygroup.value).subscribe(function(res:Response){
    
    });
    
  });
 
  }

}
