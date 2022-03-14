import { Component, OnInit, Inject } from '@angular/core';
import { NewsFeed } from 'src/app/entity/common-entity';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-getnewsfeed',
  templateUrl: './getnewsfeed.component.html',
  styleUrls: ['./getnewsfeed.component.css']
})
export class GetnewsfeedComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: NewsFeed,
    public loginService: LoginService) { }

  ngOnInit(): void {
  }

  addNewsFeed(feed: NewsFeed) {
    console.log(feed)

    this.loginService.addNewsFeed(feed)
    .subscribe(data => {
      console.log(data)
      feed.callback()
    })

  }
}
