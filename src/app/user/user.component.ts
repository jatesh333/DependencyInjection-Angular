import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(Profile:ProfileService) {
    Profile.sendData('My name is Jatesh')
   }

  ngOnInit(): void {
  }
  

}
