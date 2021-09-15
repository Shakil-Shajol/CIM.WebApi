import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError, empty } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.baseUrl = "";
  }

  get<T>(url: string, parmams: any = null) {
    if (!parmams) {
      return this.httpClient.get<T>(this.baseUrl + url);
    } else {
      return this.httpClient.get<T>(this.baseUrl + url + parmams);
    }
  }

  postFile(url: string, formData: FormData) {
    if (formData) {
      return this.httpClient.post(this.baseUrl + url, formData).pipe
        (
          catchError(this.handleError)
        );
    }
  }
  post<T>(url: string, parmams: any = null) {
    if (parmams) {
      return this.httpClient.post<T>(this.baseUrl + url, parmams, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).pipe(
        catchError(this.handleError)
      );
    }
    else {
      return this.httpClient.post<T>(this.baseUrl + url, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).pipe(
        catchError(this.handleError)
      );
    }
  }
  private handleError(error: HttpErrorResponse) {
    console.log('error:', error);
    console.log('error.error:', error.error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (!error.url.includes('SubmitPickupSchedule')) {
        alert(`Request not processed Due To Server Error`);
      }
    }

    if (error.error["ExceptionType"] && error.error["ExceptionType"] == "System.Security.SecurityException") {
      return throwError(error);
    }
    else {
      return throwError(error);
    }

  };
}
