import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL: string = 'http://localhost:8000/api'

  constructor(public httpClient: HttpClient) { }

  getHeaders() : HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json')
                            // .append('Access-Control-Allow-Origin', 'http, https')
                            // .append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTONS')
                            // .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  }

  get(endPoint: string, params: HttpParams) {
    let headers = this.getHeaders();
    return this.httpClient.get(this.baseURL + endPoint, { headers, params})        
  }

  getfromAPI(endPoint: string, params: HttpParams) {
    let headers = this.getHeaders();
    return this.httpClient.get(endPoint, { headers, params})        
  }
  
  post<T>(endPoint: string, params: T) {
    let headers = this.getHeaders();
    return this.httpClient.post<T>(this.baseURL + endPoint, JSON.stringify(params), {headers})
    .pipe(
      catchError(this.handleError)
    )        
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
