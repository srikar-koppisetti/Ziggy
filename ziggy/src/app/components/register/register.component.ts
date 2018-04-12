import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  displayName:string;
  errMsg:string;

  constructor(
    public router:Router,
    public authService:AuthService
  ) { }

  ngOnInit() {
  }

  register(){
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService.register(email,password,displayName)
      .then(resolve => this.router.navigate(['chatroom']))
      .catch(error => this.errMsg = error.message);
  }

}
