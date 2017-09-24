import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {isNullOrUndefined} from 'util';

import { Http } from '@angular/http';
import { AuthService } from "../services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'
import { JobService } from '../services/job.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: []
})
export class MapComponent implements OnInit {

//fliter jobs
public subscription: Subscription;
  public job;


  lat: number;
  lng: number;
  @Input() mapLocations: [MapLocation];
  @Output() mapLocationClicked = new EventEmitter();
  @Output() markerClicked = new EventEmitter();

  constructor(private jobService:JobService) {
  }

  ngOnInit() {
    if (!isNullOrUndefined(this.mapLocations) && this.mapLocations.length >= 1) {
      this.lat = this.mapLocations[0].lat;
      this.lng = this.mapLocations[0].lng;
    } else {
      this.getCurrentLocation().then(function (loc: { lat: number, lng: number }) {
        // console.log(loc.lat + "this is my lat");
        // console.log(loc.lng + "this is my long");
        // //this.lat = loc.coords.latitude;
        // // this.lng = loc.coords.longitude;

      });
    }
  }
  getCurrentLocation() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (loc) {
        console.log(loc.coords.latitude);
        console.log(loc.coords.longitude);
        resolve({lat: loc.coords.latitude, lng: loc.coords.longitude});
      }, function (error) {
        console.log(error);
        reject('The service is not working');
      });
    });
  }

  clickedMarker(loc: MapLocation) {
    console.log(`clicked the marker:` + loc.toString());
    this.markerClicked.emit(loc);
  }

  mapClicked($event: any) {
    this.mapLocationClicked.emit({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });

    this.job = this.jobService.getTenJob($event.coords.lng,$event.coords.lat);
    console.log( 'am in 10 job'+this.job);
  }
}

interface MapLocation {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
