import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http:Http,private _auth:AuthService) {

   }
   getAll(){
    return this.http.get('http://localhost:3000/users').map(res=>res.json());
   }
   getOne(email:String){
     return this.http.get('http://localhost:3000/users/user/'+email).map(res=>res.json());
   }
   save(data){
   return this.http.post('http://localhost:3000/users',data).map(res=>res.json());
   }
   update(id,data){
     return this.http.put('http://localhost:3000/users',data).map(res=>res.json());
    
  }
   delete(email){
     return this.http.delete('http://localhost:3000/users/user/'+email).map(res=>res.json());
   }
}