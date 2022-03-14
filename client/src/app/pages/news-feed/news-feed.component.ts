import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsFeed } from 'src/app/entity/common-entity';
import { HttpService } from 'src/app/services/http.service';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { GetnewsfeedComponent } from 'src/app/news-feed/getnewsfeed/getnewsfeed.component';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  newsFeeds: NewsFeed[] = []
  dialogRef: any

  constructor(public httpService: HttpService, public loginService: LoginService,
    public newsFeedDialog: MatDialog, private snackBar: MatSnackBar) { 
    this.getNewsFeed()

  }

  ngOnInit(): void {
  }

  getNewsFeed() {
    let params = new HttpParams()

    this.httpService.get("/getNewsFeed",params)
    .subscribe(data => {
      console.log(data)
      let response = data as any
      this.newsFeeds = response.newsFeed
    })
  }

  addNewsFeed() {
    let newsFeed = new NewsFeed()
    newsFeed.userName = this.loginService.user.userName
    newsFeed.fullName = this.loginService.user.fullName
    newsFeed.profilePicPath = this.loginService.user.profilePicPath
    newsFeed.callback = this.closeDialog

    this.dialogRef = this.newsFeedDialog.open(GetnewsfeedComponent, {
      width: '500px',
      height: '500px',
      data: newsFeed
    });
}

  closeDialog = () =>  {
    this.snackBar.open('feed added successfully', '', { duration: 3000, horizontalPosition: 'center', 
  verticalPosition: 'top'})
    this.dialogRef.close()

    this.getNewsFeed();
  }

}
