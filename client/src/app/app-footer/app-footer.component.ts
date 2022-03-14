import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  twitterIcon = faTwitter;
  instaIcon = faInstagram;
  fbIcon = faFacebook;
  linkedinIcon = faLinkedinIn;
  
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  openPage(url: string) {
    window.open(url)
  }

}
