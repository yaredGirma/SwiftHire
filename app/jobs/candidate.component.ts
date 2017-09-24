import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";
import {JobService} from '../services/job.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html'
 // styleUrls: ['./jobe.component.css']
})
export class CandidateComponent {
  public jobs;
  public witlists;
  constructor(private jobService:JobService, private auth:AuthService){
   this.jobService.getAll().subscribe(data=>this.jobs=data);
  }

getJobs(logedinuser){
  //with waitlist
}

}
