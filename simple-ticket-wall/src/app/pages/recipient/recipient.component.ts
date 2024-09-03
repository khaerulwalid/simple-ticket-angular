import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RecipientCardComponent } from '../recipient-card/recipient-card.component';
import { Recipient } from '../../models/user-credentials.interface';
import { RecipientService } from '../../services/recipient.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipient',
  standalone: true,
  imports: [CommonModule, RecipientCardComponent, RouterModule],
  templateUrl: './recipient.component.html',
  styleUrl: './recipient.component.css'
})
export class RecipientComponent implements OnInit {
  private _recipients = signal<Recipient[]>([]);
  error = signal<string | null>(null);

  constructor(private recipientService: RecipientService) {}

  get recipients(): Recipient[] {
    return this._recipients();
  }

  ngOnInit(): void {
      this.recipientService.getRecipients().subscribe(
        (data: Recipient[]) => {
          console.log(data, "<<Data Recipient");
          
          this._recipients.set(data);
          this.error.set(null);
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching donors:', error);
          this.error.set("Error fetching recipient");
        }
      )
  }
}
