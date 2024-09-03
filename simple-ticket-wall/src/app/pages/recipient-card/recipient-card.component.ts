import { Component, Input } from '@angular/core';
import { Recipient } from '../../models/user-credentials.interface';
import { CommonModule } from '@angular/common';
import { DonorService } from '../../services/donor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipient-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipient-card.component.html',
  styleUrl: './recipient-card.component.css'
})
export class RecipientCardComponent {
  @Input() recipient!: Recipient;

  constructor(private donorService: DonorService, private router: Router) {}

  addDonor(recipientId: number): void {
    console.log(recipientId, "<<recipientId");
    
    this.donorService.postDonors(recipientId).subscribe(
      (res) => {
        this.router.navigate(['/recipientdonor']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
