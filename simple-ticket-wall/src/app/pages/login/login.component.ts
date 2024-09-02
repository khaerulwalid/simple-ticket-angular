import { Component, inject } from '@angular/core';
import { LoginResponse, UserCredentials } from '../../models/user-credentials.interface';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: UserCredentials = {
    "email": "",
    "password": ""
  }

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {
    this.masterSrv.login(this.loginObj).subscribe(
      (res: LoginResponse) => {
      console.log(res, "<<Response");
      if(res.access_token) {
        localStorage.setItem('access_token', JSON.stringify(res.access_token));
        this.router.navigateByUrl('dashboard');
      }
    },
    (error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.log("User or Password salah");
        alert("Invalid Email or password");
      } else {
        console.error("An unexpected error occurred:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  );
  }
}
