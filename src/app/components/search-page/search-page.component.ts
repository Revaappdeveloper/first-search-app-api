import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  showLogoutBtn: boolean = false;
  searchKey = '';
  showList: boolean = false;
  showResultStatus: boolean =false;
  items = [];
  storeSetTimeout = null;
  public keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;


  constructor(private router: Router, private httpClient: HttpClient) { 
    this.keyUp.pipe(
      debounceTime(800),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value);
    this.showSearchKey();
      });
  }

  ngOnInit() {
  }
  logout() {
    console.log('logout');
    this.router.navigateByUrl('/logout');
  }
  showHideLogout() {
    this.showLogoutBtn = true;
  }
  showListItems() {
    this.showList = true;
  }
  showSearchKey() {
    if(this.searchKey===''){
      return;
    }
    console.log(this.searchKey);
    let httpRequest = this.httpClient.get('https://swapi.co/api/planets?search=' + this.searchKey);
    httpRequest.subscribe((res:any) => {
      console.log(res);
      this.items= res.results;
      if (this.items && this.items.length === 0){
        this.showResultStatus = true;
        setTimeout(()=>{
this.showResultStatus = false;
        }, 1000);
      }
    })
   

  }
//   keyReleased(){
//     clearTimeout(this.storeSetTimeout);
//     this.storeSetTimeout = setTimeout(()=>{
// console.log("Key typing stopped");
// this.showSearchKey();
//     },800);

//   }
}
