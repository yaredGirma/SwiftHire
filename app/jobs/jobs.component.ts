import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'

})
export class JobsComponent {
   constructor(private auth:AuthService){
  }
}
