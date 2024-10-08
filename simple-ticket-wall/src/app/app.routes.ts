import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { RecipientDonorComponent } from './pages/recipient-donor/recipient-donor.component';
import { RecipientComponent } from './pages/recipient/recipient.component';
import { RequestBloodComponent } from './pages/request-blood/request-blood.component';
import { MyRecipientBloodComponent } from './pages/my-recipient-blood/my-recipient-blood.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path: 'recipientdonor',
                component: RecipientComponent,
                canActivate: [authGuard]
            },
            {
                path: 'requestblood',
                component: RequestBloodComponent,
                canActivate: [authGuard]
            },
            {
                path: 'requestblood/:id',
                component: RequestBloodComponent,
                canActivate: [authGuard]
            },
            {
                path: 'myrecipientblood',
                component: MyRecipientBloodComponent,
                canActivate: [authGuard]
            }
        ]
    }
];
