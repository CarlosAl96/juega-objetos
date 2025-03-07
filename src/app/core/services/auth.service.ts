import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { AuthResponse } from '../models/authResponse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl: string = `${environment.api_url}users`;
  private resetPasswordUrl: string = `${environment.api_url}users/reset-password`;
  private changePasswordUrl: string = `${environment.api_url}users/change-password`;

  constructor(private http: HttpClient) {}

  public login(request: any): Observable<ApiResponse<AuthResponse>> {
    return this.http
      .post<ApiResponse<AuthResponse>>(this.usersUrl + '/auth', request)
      .pipe(catchError(this.handleError));
  }

  public logout(id: number): Observable<ApiResponse<AuthResponse>> {
    return this.http
      .post<ApiResponse<AuthResponse>>(this.usersUrl + '/logout', { id })
      .pipe(catchError(this.handleError));
  }

  public register(request: any): Observable<ApiResponse<any>> {
    return this.http
      .post<ApiResponse<any>>(this.usersUrl, request)
      .pipe(catchError(this.handleError));
  }

  public resetPassword(request: any): Observable<ApiResponse<any>> {
    return this.http
      .post<ApiResponse<any>>(this.resetPasswordUrl, request)
      .pipe(catchError(this.handleError));
  }

  public changePassword(
    request: any,
    token: string
  ): Observable<ApiResponse<any>> {
    return this.http
      .post<ApiResponse<any>>(this.changePasswordUrl + '/' + token, request)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
