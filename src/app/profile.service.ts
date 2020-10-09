import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private name = new Subject();

  constructor() { }
  emp ():Observable<any>{
    return this.name 
  }
  sendData(name){
this.name.next(name);
  }
}
