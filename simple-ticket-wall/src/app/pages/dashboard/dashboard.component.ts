import { Component, OnInit, signal } from '@angular/core';
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
  private _donors = signal<Donor[]>([]);
  error = signal<string | null>(null);

  constructor(private donorService: DonorService){}

  ngOnInit(): void {
    this.fetchDonors();
  }

  get donors(): Donor[] {
    return this._donors();
  }

  fetchDonors(): void {
    this.donorService.getDonors().subscribe(
      (data: Donor[]) => {
        
        this._donors.set(data);
        this.error.set(null);
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching donors:', error);
        this.error.set("Error Fetching donors")
      }
    )
  }
}
