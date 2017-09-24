import { Component ,Input} from '@angular/core';
import { AuthService } from "../services/auth.service";
import {JobService} from "../services/job.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 
  @Input() data:any;
   posts;
  isDataAvailable:boolean = false;

  constructor(private jobService: JobService,private auth:AuthService) {
    this.jobService.getAll().subscribe(data => {
      this.posts= data;
      // this.posts = JSON.stringify(data);
      // console.log(data[0].description)
    });
   }

  getTenJobs(){

  }
}
