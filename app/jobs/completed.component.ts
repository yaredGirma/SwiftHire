import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";
import {JobService} from '../services/job.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html'
 // styleUrls: ['./jobe.component.css']
})
export class CompletedComponent {
  public jobs;
  constructor(private jobService:JobService, private auth:AuthService){
   this.jobService.getAll().subscribe(data=>this.jobs=data);
  }
}
