import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Permission} from 'src/app/core/models/classes/Permission';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Input() permissions: Permission [];
  @Output() permissionCount = new EventEmitter<number>();
  @ViewChild('addForm', {static: false}) addFrom: NgForm;
  constructor() {
  }

  ngOnInit() {
  }

  public addPermission(addForm: NgForm): void {
    const newPermission: Permission = addForm.value as Permission;
    this.permissions.push(newPermission);
    this.permissionCount.emit(this.permissions.length);
    this.addFrom.reset();
  }
}
