import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donor } from '../models/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getDonors(): Observable<Donor[]> {
    return this.http.get<Donor[]>(this.apiUrl + 'donors');
  }

  postDonors(recipientId: number): Observable<any> {
    return this.http.post<any>(this.apiUrl + "donors/" + recipientId, {});
  } 
}
