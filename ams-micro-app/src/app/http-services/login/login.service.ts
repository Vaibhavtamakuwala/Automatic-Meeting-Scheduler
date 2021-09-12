import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  constructor(private http: HttpClient) { }
  signup(user: User) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')

   
    return this.http.post<User>("http://localhost:8081/users", user,{headers, responseType: 'text' as 'json'});
   
  }
}
