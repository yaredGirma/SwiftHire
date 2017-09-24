//import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { JobComponent } from './job/job.component';
import { AuthGuard } from './auth.guard';
import { JobsComponent } from './jobs/jobs.component';
import { UserComponent } from './user/user.component'
import { RateAndCommentComponent } from './jobs/rateAndCommet.component';
import { ApplyComponent } from './apply/apply.component';
import { SearchjobComponent } from './jobs/searchjob.component';
import { UnsubscribeUserComponent } from './subscribeAndunsubscribe/unsubscribe-user.component';
import { SubscribeUserComponent } from './subscribeAndunsubscribe/subscribe-user.component';
import { CompletedComponent } from './jobs/completed.component';
import { NearComponent } from './nearestjobs/near.component';
import {MapComponent} from './nearestjobs/map.component';
import {CandidateComponent } from './jobs/candidate.component';

const appRoutes: Routes = [


    {

        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [{
            path: 'subscribe',
            component: SubscribeUserComponent,
        },
        {

            path: 'unsubscribe',
            component: UnsubscribeUserComponent
        }
        ]
    },
    { path: 'job', component: JobComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'user', component: UserComponent },
    { path: 'rateAndComment', component: RateAndCommentComponent },
    { path: 'completed', component: CompletedComponent },
  
    { path: 'apply/:id', component: ApplyComponent },
    { path: 'search', component: SearchjobComponent },
     { path: 'near', component: NearComponent },
     {path:'map', component:MapComponent},
     {path:'candidates', component:CandidateComponent }

];


export const appRouter = RouterModule.forRoot(appRoutes);
