import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {appRouter} from './app.routers';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//authentication
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import {JobService} from './services/job.service';

import {JobsComponent} from './jobs/jobs.component';
import {JobPostComponent  } from './templates/jobpost.component';
import {CompletedComponent} from './jobs/completed.component';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {JobComponent} from './job/job.component';
import {AuthGuard} from './auth.guard';
import { SearchPipe } from './search.pipe';
import {SearchComponent} from './templates/search.component';
import { UserComponent } from './user/user.component';
import {RateAndCommentComponent} from './jobs/rateAndCommet.component';
import {ApplyComponent} from './apply/apply.component';
import { SearchjobComponent } from './jobs/searchjob.component';
import {UnsubscribeUserComponent} from './subscribeAndunsubscribe/unsubscribe-user.component';
import {SubscribeUserComponent} from './subscribeAndunsubscribe/subscribe-user.component';
import {NearComponent} from './nearestjobs/near.component';
import {MapComponent} from './nearestjobs/map.component';

import { AgmCoreModule} from 'angular2-google-maps/core';

import {CandidateComponent } from './jobs/candidate.component';



@NgModule({
  declarations: [

    SubscribeUserComponent,
    UnsubscribeUserComponent,
    RateAndCommentComponent,
    AppComponent,
        HomeComponent,
            ProfileComponent,
              JobComponent,
                JobsComponent,
                   SearchPipe,
                   JobPostComponent,
                      SearchComponent,
                        UserComponent,
                          ApplyComponent,
                       SearchjobComponent,
                       CompletedComponent,
                       NearComponent,
                       MapComponent,
                    CandidateComponent 
                       


  ],
  imports: [
    BrowserModule,
      appRouter,
      HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot()
     
  ],
  providers: [AuthService,AuthGuard,UserService,JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
