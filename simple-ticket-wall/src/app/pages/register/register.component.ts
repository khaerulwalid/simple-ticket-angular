import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserRegistration } from '../../models/user-credentials.interface';
import { MasterService } from '../../services/master.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  inputRegister: UserRegistration = {
    "name": "",
    "email": "",
    "username": "",
    "password": ""
  }

  masterSrv = inject(MasterService);
  router = inject(Router);

  onRegister() {
    this.masterSrv.register(this.inputRegister).subscribe(
      (res: UserRegistration) => {
        alert('Success registration ' + res.name)
        this.router.navigateByUrl('login');
      },
      (error: HttpErrorResponse) => {
        console.log(error, "<<Error Register");
        
        if(error.status === 400) {
          alert(error.error.message);
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    )
  }
}
