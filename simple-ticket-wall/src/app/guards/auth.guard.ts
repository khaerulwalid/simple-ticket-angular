import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const token = localStorage.getItem('access_token');

    console.log('Navigating to:', state.url);
    console.log('Token:', token);

    if(!token && state.url !== '/login') {
        console.log('Redirecting to /login');
        router.navigate(['/login']);
        return false;
    }

    if(state.url === '/login' && token) {
        console.log('Redirecting to /dashboard');
        router.navigate(['/dashboard']);
        return false;
    }

    return true;
}