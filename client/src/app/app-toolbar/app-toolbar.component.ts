import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../entity/common-entity';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  navigate(link: string) {
    this.router.navigateByUrl(link)
  }

  logout() {
    this.loginService.user = new User()
    this.router.navigateByUrl('login')
  }

}
