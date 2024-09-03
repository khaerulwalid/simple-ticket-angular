import { Component, Input } from '@angular/core';
import { Recipient } from '../../models/user-credentials.interface';
import { CommonModule } from '@angular/common';
import { DonorService } from '../../services/donor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
        alert('Anda sudah daftar donor');
        this.router.navigate(['/dashboard']);
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )
  }
}
