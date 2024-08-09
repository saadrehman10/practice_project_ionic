import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public route:ActivatedRoute
  ) { }
 profileId: any
  ngOnInit() {
    this.profileId=this.route.snapshot.paramMap.get('proid')

      
  }

}
