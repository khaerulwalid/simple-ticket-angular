import { Component, Input } from '@angular/core';
import { MyRecipient } from '../../models/user-credentials.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RecipientService } from '../../services/recipient.service';

@Component({
  selector: 'app-my-recipient-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-recipient-card.component.html',
  styleUrl: './my-recipient-card.component.css'
})
export class MyRecipientCardComponent {
  @Input() myRecipient!: MyRecipient;

  constructor(private router: Router, private recipientService: RecipientService) {}

  onEdit(): void {
    this.router.navigate(['/requestblood', this.myRecipient.id]);
  }

  onDelete(): void {
    // Konfirmasi sebelum menghapus data
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteRecipient(this.myRecipient.id);
      }
    })
  }

  private deleteRecipient(id: number): void {
    this.recipientService.deleteMyRecipient(id).subscribe(
      () => {
        Swal.fire(
          'Deleted!',
          'Your recipient has been deleted.',
          'success'
        );

        this.router.navigate(['/myrecipientblood']);
      },
      (error) => {
        console.error('Error deleting recipient:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete recipient',
        });
      }
    );
  }
}
