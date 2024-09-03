import { Component, Input } from '@angular/core';
import { Donor } from '../../models/user-credentials.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donor-card.component.html',
  styleUrl: './donor-card.component.css'
})
export class DonorCardComponent {
  @Input() donor!: Donor;
}
