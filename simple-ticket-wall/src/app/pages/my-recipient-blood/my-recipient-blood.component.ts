import { Component, OnInit } from '@angular/core';
import { MyRecipient } from '../../models/user-credentials.interface';
import { RecipientService } from '../../services/recipient.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MyRecipientCardComponent } from '../my-recipient-card/my-recipient-card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-recipient-blood',
  standalone: true,
  imports: [CommonModule, MyRecipientCardComponent],
  templateUrl: './my-recipient-blood.component.html',
  styleUrls: ['./my-recipient-blood.component.css']
})
export class MyRecipientBloodComponent implements OnInit {
  myRecipients$: Observable<MyRecipient[]>;
  error: string | null = null;

  constructor(private recipientService: RecipientService) {
    this.myRecipients$ = this.recipientService.recipients$;
  }

  ngOnInit(): void {
    this.myRecipients$.subscribe(
      () => this.error = null,
      (error: HttpErrorResponse) => {
        console.error('Error fetching recipients:', error);
        this.error = "Error fetching recipients";
      }
    );
  }
}
