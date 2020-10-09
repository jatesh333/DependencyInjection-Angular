import { Component } from '@angular/core';


import {ProfileService} from './profile.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularService-DependencyInjection';
  name: any;
  array: any;
  

  constructor(Profile: ProfileService){
   Profile.emp().subscribe(data=>{
     this.name = data
   })
   Profile.getOperation().subscribe(data=>{
     console.log(data)
     this.array = data;
   })

  }
}
