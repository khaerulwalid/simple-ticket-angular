import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const token = localStorage.getItem('access_token');


    if(!token && (state.url !== '/login' && state.url !== '/register')) {
        router.navigate(['/login']);
        return false;
    }

    if((state.url === '/login' || state.url === '/register') && token) {
        router.navigate(['/dashboard']);
        return false;
    }

    return true;
}