import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/common-entity';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userName: string = ''
  public password: string = ''
  public confirmPassword: string = ''
  public validationMessage: string = ''
  public emailId : string = ''
  public filePath: string = ''
  public fileURL: any
  public fullName: string = ''

  constructor(public loginService: LoginService, public router: Router ) { }

  ngOnInit(): void {
  }

  signUpUser() {
    if(this.userName.trim() === '' || this.password.trim() === '' || this.confirmPassword.trim() === ''
      || this.emailId.trim() === '' || this.fileURL.trim() === '' || this.fullName.trim() == '') {
      this.validationMessage = 'Please provide all details'
      return;
    }

    if(this.password.trim() !== this.confirmPassword.trim()) {
      this.validationMessage = 'Password and confirm password does not match '
      return;
    }

    this.validationMessage = '';

    let user = new User() 
    user.userName = this.userName;
    user.password = this.password;
    user.emailId = this.emailId
    user.fileURL = this.fileURL
    user.fullName = this.fullName

    console.log('sing up request sent:', user)

    this.loginService.signUpUser(user)
    .subscribe(data => {
      console.log(data)
      let res = data as any
      if(res.success === true) {
        alert('Sign up Successfull. Click Ok to login')
        this.router.navigateByUrl('login')
      }
      else {
        this.validationMessage = res.message
      }      
    })

  }

  fileChange(event: any) {
    // let picFile = <HTMLInputElement>document.getElementById('fileData')
    // if(picFile === undefined || picFile === null || picFile.files.length === 0) {
    //     return
    // }

    var file = event.target.files[0];
    let reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onloadend = () => {
        console.log('RESULT', reader.result)
        this.fileURL = reader.result
      }

    return reader
  }


}
