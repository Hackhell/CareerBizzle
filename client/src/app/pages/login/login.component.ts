import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/common-entity';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public UserName: string = ''
  public Password: string = ''
  public ValidationMessage: string = ''

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  LoginUser() {
    if(this.UserName.trim() === '' || this.Password.trim() === '') {
      this.ValidationMessage = 'Please provide both username and password'
      return;
    }

    this.ValidationMessage = '';

    let user = new User() 
    user.userName = this.UserName;
    user.password = this.Password;

    this.loginService.loginUser(user)
    .subscribe(data => {
      console.log(data)
      let resp = data as any
      this.loginService.user = resp.user
      this.loginService.user.profilePicPath = 'http://localhost:8000/api/getProfilePic/'+this.loginService.user.userName
      if(this.loginService.user.isLoggedIn === true) {
        this.router.navigateByUrl('dashboard')
      }
      else {
        this.ValidationMessage = 'User not authorised'
      }      
    })
  }
}
