import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'string';
  password = 'string';

  constructor() { }

  

  ngOnInit(){}

  login()
  {
    alert("Login Form Working");
  }
}
