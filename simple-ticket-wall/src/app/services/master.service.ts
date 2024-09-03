import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, UserCredentials, UserRegistration } from '../models/user-credentials.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  login(obj: UserCredentials) {    
    return this.http.post<LoginResponse>(this.apiUrl + "login", obj);
  }

  register(obj: UserRegistration) {
    return this.http.post<UserRegistration>(this.apiUrl + "users", obj);
  }
}
