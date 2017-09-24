import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html'
 // styleUrls: ['./jobe.component.css']
})
export class JobComponent {
  myForm: FormGroup;
  lat: number;
  long: number;
   constructor(private jobService:JobService,private formBuilder: FormBuilder,private auth:AuthService){
// console.log(localStorage.getItem('profile')) 

 
    this.myForm = formBuilder.group({
      'name': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'category': ['', [Validators.required]],
      'duration': ['', [Validators.required]],
      'hourlyFee': ['', [Validators.required]],
      'preferredDateTime': ['', [Validators.required]],
      'DurationPerHour': ['', [Validators.required]],
      'wattingList': ['', [Validators.required]],
     // 'location': ['', [Validators.required]],
    });
    
       

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.long = position.coords.longitude;
    //     console.log(this.lat);
    //     console.log(this.long);
    //   });

      // this.myForm.statusChanges.subscribe(
      //   (data: any) => console.log(data)
      // );
    }
  
  onSubmit() {
    let coords;
    //let wattingList:[Object]=null;
    navigator.geolocation.getCurrentPosition((position) => {
      coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.myForm.value.wattingList=null;
      this.myForm.value.coords = coords;
      console.log(this.myForm.value);
      this.jobService.save(this.myForm.value).subscribe((data) => {
      });
  
 
    }, (err) => {
      console.log(err);
    })
   
  }
}
