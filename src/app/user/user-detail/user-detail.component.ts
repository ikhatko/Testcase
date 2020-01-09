import {Location} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/core/models/interfaces/User';
import {UserService} from 'src/app/core/services/user.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private location: Location) {
    this.user = router.getCurrentNavigation().extras.state as User;
  }

  ngOnInit(): void {
  }

  public goBack(): void {
    this.location.back();
  }

}
