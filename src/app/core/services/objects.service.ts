import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Object } from '../models/object';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  private objectsUrl: string = `${environment.api_url}objects`;

  constructor(private http: HttpClient) {}

  public getObjects(): Observable<ApiResponse<Object[]>> {
    return this.http
      .get<ApiResponse<Object[]>>(this.objectsUrl)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
