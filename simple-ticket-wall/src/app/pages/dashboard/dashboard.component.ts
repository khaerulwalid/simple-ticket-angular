import { Component, OnInit } from '@angular/core';
import { DonorCardComponent } from '../donor-card/donor-card.component';
import { CommonModule } from '@angular/common';
import { Donor } from '../../models/user-credentials.interface';
import { DonorService } from '../../services/donor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DonorCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  donors: Donor[] = [];

  constructor(private donorService: DonorService){}

  ngOnInit(): void {
      this.donorService.getDonors().subscribe(
        (data: Donor[]) => {
          this.donors = data;
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching donors:', error);
        }
      )
  }
}
