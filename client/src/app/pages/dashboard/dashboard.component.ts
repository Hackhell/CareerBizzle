import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResult } from 'src/app/entity/common-entity';
import { HttpService } from 'src/app/services/http.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  searchText: string = ''
  searchList: SearchResult[] = []
  myControl = new FormControl();

  constructor(public router: Router, public httpService: HttpService) { }


  ngOnInit(): void {
  }

  navigate(link: string) {
    this.router.navigateByUrl(link)
  }

  searchSelected(event: any) {
    console.log(event)    
    this.router.navigateByUrl(event.option.value)
  }

  searchChange(event: any) {
    console.log(event.target.value)    

    this.searchList = [];

    if(event.target.value === null || event.target.value.length < 3) return

    console.log("calling search api")    

    let searchR = new SearchResult();
    searchR.searchText = event.target.value;

    this.httpService.post<SearchResult>("/search", searchR)
    .subscribe(data => {
      console.log(data)
      let resp = data as any
      if(resp.success === true) {
        this.searchList = resp.searchList as SearchResult[];
        // this.router.navigateByUrl('dashboard')
      }
    })
  }
}
