import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipientService } from '../../services/recipient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { MyRecipient } from '../../models/user-credentials.interface';

@Component({
  selector: 'app-request-blood',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-blood.component.html',
  styleUrl: './request-blood.component.css'
})
export class RequestBloodComponent {
  bloodForm: FormGroup;
  isEditMode = false;
  recipientId: number | null = null;

  constructor(private fb: FormBuilder, private recipientService: RecipientService, private router:Router, private route: ActivatedRoute) {
    this.bloodForm = this.fb.group({
      stock: ['', Validators.required],
      location: ['', Validators.required],
      bloodType: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      console.log(id, "<<Id Edit");
      
      if (id) {
        this.recipientId = id;
        this.isEditMode = true;
        this.loadRecipientData(id);
      }
    });
  }

  loadRecipientData(id: number): void {
    this.recipientService.getRecipientById(id).subscribe(
      (data: MyRecipient) => {
        console.log(data, "<<Data Recipient ById")
        this.bloodForm.patchValue({
          stock: data.stock,
          location: data.location,
          bloodType: data.bloodType,
          description: data.description,
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to load recipient data',
        });
      }
    );
  }

  onSubmit(): void {
    if(this.bloodForm.valid) {
      const formData = this.bloodForm.value;
      if (this.isEditMode && this.recipientId) {
        this.recipientService.updateRecipient(this.recipientId, formData).subscribe(
          (res: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Successfully updated the blood request',
            });
            this.router.navigate(['/myrecipientblood']);
          },
          (error: HttpErrorResponse) => {
            console.error('Error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to update donor request',
            });
          }
        )
      } else {
        this.recipientService.postRecipient(this.bloodForm.value).subscribe(
          (res: any) => {
            
            Swal.fire({
              icon: "success",
              title: "Success..",
              text: "Success Add Data Request Blood",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
            this.router.navigate(['/myrecipientblood']);
          },
          (error: HttpErrorResponse) => {
            console.error('Error:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to submit donor request",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
          }
        )
      }
    }
  }
}
