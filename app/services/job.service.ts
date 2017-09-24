
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { AuthService } from "./auth.service";
import{Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class JobService {
  
 constructor(private http:Http,private _auth:AuthService) {

   }
   
   getAll(){
    return this.http.get('http://localhost:3000/jobs').map(res=>res.json());
   }
   getOne(id:String){
     return this.http.get('http://localhost:3000/jobs/job/'+id).map(res=>res.json());
   }
   save(data){
   return this.http.post('http://localhost:3000/jobs',data).map(res=>res.json());
   }
   update(id,data){
     return this.http.put('http://localhost:3000/jobs/'+id,data).map(res=>res.json());
    
  }
   delete(id:String){
     return this.http.delete('http://localhost:3000/jobs/job/'+id).map(res=>res.json());
   }
    getTenJob(lng,lat){
      console.log(lng+" "+lat);
    return this.http.get('http://localhost:3000/jobs/joblocation/'+lng+'/'+lat).map(res=>res.json());
    }
   getByMinFeeJob(minFee){
     return this.http.get('http://localhost:3000/jobs/minfee/'+minFee).map(res=>res.json());
   }
    getByCategory(category){
     return this.http.get('http://localhost:3000/jobs/minfee/'+category).map(res=>res.json());
   }
  
   
  


}