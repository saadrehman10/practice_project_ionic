import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor() { }

  followbtn: string = 'Follow';
  random : boolean = true;

  followChange(){
    if (this.followbtn == 'Follow'){
    
      this.followbtn = 'Unfollow'
    }else{
      this.followbtn = 'Follow'
    }
  }

  ngOnInit() {
    this.random;
    this.followbtn;
  }

}
