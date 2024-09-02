import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserCredentials } from '../models/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  login(obj: UserCredentials) {
    console.log(obj, "<<Obj");
    
    return this.http.post<LoginResponse>(this.apiUrl + "login", obj);
  }
}
