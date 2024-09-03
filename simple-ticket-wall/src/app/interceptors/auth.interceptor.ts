import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    let token = localStorage.getItem('access_token');
    const router = inject(Router);

    token = token ? token.replace(/^"(.*)"$/, '$1') : null;
  
    let clonedReq = req;
    
    if (token) {
      clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }
  
    return next(clonedReq).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem('access_token');

          router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
};
