import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipientCardComponent } from '../recipient-card/recipient-card.component';
import { Recipient } from '../../models/user-credentials.interface';
import { RecipientService } from '../../services/recipient.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recipient',
  standalone: true,
  imports: [CommonModule, RecipientCardComponent],
  templateUrl: './recipient.component.html',
  styleUrl: './recipient.component.css'
})
export class RecipientComponent implements OnInit {
  recipients: Recipient[] = [];

  constructor(private recipientService: RecipientService) {}

  ngOnInit(): void {
      this.recipientService.getRecipients().subscribe(
        (data: Recipient[]) => {
          console.log(data, "<<Data Recipient");
          
          this.recipients = data;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching donors:', error);
        }
      )
  }
}
