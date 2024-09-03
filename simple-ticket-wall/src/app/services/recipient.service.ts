import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipient } from '../models/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRecipients(): Observable<Recipient[]> {
    return this.http.get<Recipient[]>(this.apiUrl + 'recipients');
  }
}
