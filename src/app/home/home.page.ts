import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: Object[] = [];

  ngOnInit() {
    for (let i = 1; i < 10; i++) {
      this.items.push(`Review ${i}\n hello the product was great`);
    }
  }

}
