import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  constructor() { }
  items: Object[] = [];

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.items.push(`Review ${i}\n hello the product was great`);
    }
  }

}
