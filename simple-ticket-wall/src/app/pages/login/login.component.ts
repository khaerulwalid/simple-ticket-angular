import { Component, inject } from '@angular/core';
import { LoginResponse, UserCredentials } from '../../models/user-credentials.interface';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: UserCredentials = {
    "emailId": "",
    "password": ""
  }

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {
    this.masterSrv.login(this.loginObj).subscribe((res: LoginResponse) => {
      console.log(res, "<<Response");
      if(res.role === "admin") {
        localStorage.setItem('name', JSON.stringify(res.name));
        localStorage.setItem('role', JSON.stringify(res.role));
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Gagal Login");
      }
    })
  }
}
