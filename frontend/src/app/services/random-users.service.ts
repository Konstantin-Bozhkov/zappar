import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserObject} from '../interfaces/UserObject';

@Injectable({
  providedIn: 'root'
})

export class RandomUsersService {

  constructor(private http:HttpClient) { }

  generateUser(data:any){
    return this.http.get('https://randomuser.me/api/', { params: {'gender':data.gender, 'nat': data.nat} }).toPromise();
  }
  saveUser(user:UserObject){
    return this.http.post('http://localhost:8000/api/v1/users',user).toPromise();
  }
}
