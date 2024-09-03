import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MyRecipient, Recipient } from '../models/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  apiUrl: string = environment.apiUrl;
  private recipientsSubject = new BehaviorSubject<MyRecipient[]>([]);
  recipients$ = this.recipientsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadRecipients();
  }

  private loadRecipients(): void {
    this.getMyRecipientsById().subscribe(
      (data: MyRecipient[]) => this.recipientsSubject.next(data),
      (error) => console.error('Error loading recipients:', error)
    )
  }

  getMyRecipientsById(): Observable<MyRecipient[]> {
    return this.http.get<MyRecipient[]>(this.apiUrl + "myrecipient");
  }

  deleteMyRecipient(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + "recipients/" + id).pipe(
      tap(() => this.loadRecipients())
    );
  }

  getRecipients(): Observable<Recipient[]> {
    return this.http.get<Recipient[]>(this.apiUrl + 'recipients');
  }

  getRecipientById(id: number): Observable<MyRecipient> {
    return this.http.get<MyRecipient>(this.apiUrl + "recipients/" + id);
  }

  postRecipient(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "recipients", data).pipe(
      tap(() => this.loadRecipients())
    );
  }

  updateRecipient(id: number, data: FormData): Observable<any> {
    return this.http.put<any>(this.apiUrl + "recipients/" + id, data).pipe(
      tap(() => this.loadRecipients())
    );
  }
}
