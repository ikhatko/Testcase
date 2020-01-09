import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {PageResponse} from 'src/app/core/models/interfaces/PageResponse';
import {User} from 'src/app/core/models/interfaces/User';
import {UserService} from 'src/app/core/services/user.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) public paginator: MatPaginator;
  public readonly displayedColumns: string [] = ['id', 'email', 'first_name', 'last_name'];
  public users: User [];
  public isLoadingResults: boolean;
  public pageResponse: PageResponse;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoadingResults = true;
    this.getUsers();
  }

  public pageChanged(event: PageEvent): void {
    this.isLoadingResults = true;
    this.getUsers(event.pageIndex + 1);
  }

  private getUsers(pageIndex?: number) {
    this.userService.getUsersPage(pageIndex)
      .subscribe(response => {
          this.pageResponse = response;
          this.users = response.data;
          this.isLoadingResults = false;
        }, () => this.isLoadingResults = false,
        () => this.isLoadingResults = false);
  }

  public showDetails(id: number): void {
    const user = this.findUserById(id);
    this.router.navigate(['detail'], {relativeTo: this.activatedRoute, state: user});
  }

  private findUserById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
