import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewsFeed, User } from '../entity/common-entity';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: User = new User()

  constructor(public httpService: HttpService) { }

  loginUser(user: User) {
    return this.httpService.post<User>("/login", user)        
  } 

  signUpUser(user: User) {
    return this.httpService.post<User>("/signup", user)        
  } 

  addNewsFeed(feed: NewsFeed) {
    return this.httpService.post<NewsFeed>("/addNewsFeed", feed)        
  } 

}
