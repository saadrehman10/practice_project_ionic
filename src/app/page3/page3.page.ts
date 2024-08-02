import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(
    public Serviceapi: ServiceService
  ) { 
    this.Serviceapi.getPosts().then((res) => {

      console.log(res)

    }).catch((err) => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
