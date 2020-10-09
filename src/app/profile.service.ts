import { Injectable } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {  Observable, Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private name = new Subject();

  constructor(private httpClient:HttpClient) { }
  emp ():Observable<any>{
    return this.name 
  }
  sendData(name){
this.name.next(name);
  }
  getOperation():Observable<any>{
    let api='https://api.github.com/users/hadley/orgs';
    return this.httpClient.get(api).pipe(
      catchError(this.errorHandler)
    )
  }

  // curdOperation():Observable<any>{
  //   let api='https://api.github.com/users/hadley/orgs'
  //  return this.httpClient.get(api).pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

errorHandler(error){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}