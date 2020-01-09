import {Component, OnInit} from '@angular/core';
import {Permission} from 'src/app/core/models/classes/Permission';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  public permissions: Permission [] = [];
  public permissionsCount: number;

  constructor() {
  }

  ngOnInit() {
    this.permissionsCount = this.permissions.length;
  }

  public getCount($event: number) {
    this.permissionsCount = $event;
  }
}
