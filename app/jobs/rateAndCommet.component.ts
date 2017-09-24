import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rateAndComment',
  templateUrl: './rateAndComment.html'
  // styleUrls: ['./jobe.component.css']
})
export class RateAndCommentComponent {
  public jobs;
  constructor(private userService: UserService, private auth: AuthService, private router: Router) {
    this.userService.getAll().subscribe(data => this.jobs = data);
  }

  rateUser(user) {

    this.userService.save(user);
    this.router.navigate(['profile']);
  }


}
