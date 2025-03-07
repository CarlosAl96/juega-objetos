import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string | null = sessionStorage.getItem('USER_TOKEN');
  const router: Router = new Router();

  if (token) {
    if (!req.url.toString().includes('refresh')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }
  }
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        sessionStorage.clear();
        if (router.url != '/auth') {
          router.navigate(['/auth']);
        }
      }
      return throwError(() => err);
    })
  );
};
