import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCredentials = {
    username:"",
    password: ""
  }
  defaultName = 'abc@gmail.com';
  defaultPwd = '123456';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  saveData(){
    console.log(this.loginCredentials);
    if(this.loginCredentials.username === this.defaultName && this.loginCredentials.password === this.defaultPwd){
      console.log('hi');
      this.router.navigateByUrl('/search');
    }else{
      alert("Enter the correct login details.");
    }
  }
}
