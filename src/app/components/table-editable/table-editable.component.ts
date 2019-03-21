import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { User } from './model/user.model';
import { AlbumService } from './service/album.service';
import { UserService } from './service/user.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-table-editable',
  templateUrl: './table-editable.component.html',
  styleUrls: ['./table-editable.component.css']
})
export class TableEditableComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  users: User[] = [];
  displayedColumns = ['id', 'userId', 'title'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _albumService: AlbumService,
    private _userService: UserService,
    private _formBuilder: FormBuilder
    ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      albums: this._formBuilder.array([])
    });
    this.loadData();
  }

  loadData() {
    this._albumService.getAllAsFormArray().subscribe(albums => {
      this.form.setControl('albums', albums);
    });
    this._userService.getAll().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get albums(): FormArray {
    return this.form.get('albums') as FormArray;
  }

  // On user change I clear the title of that album 
  onUserChange(event, album: FormGroup) {
    const title = album.get('title');

    title.setValue(null);
    title.markAsUntouched();
    // Notice the ngIf at the title cell definition. The user with id 3 can't set the title of the albums
  }
}
