import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValidatorService, TableDataSource } from 'angular4-material-table';
import { PersonValidatorService } from './service/person-validator.service';
import { Person } from './model/person';

@Component({
  selector: 'app-table-dinamic',
  templateUrl: './table-dinamic.component.html',
  styleUrls: ['./table-dinamic.component.scss'],
  providers: [
    {provide: ValidatorService, useClass: PersonValidatorService }
  ],
})
export class TableDinamicComponent implements OnInit {

  constructor(private personValidator: ValidatorService) { }

  displayedColumns = ['name', 'age', 'actionsColumn'];

  @Input() personList = [
    { name: 'Mark', age: 15 },
    { name: 'Brad', age: 50 },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  dataSource: TableDataSource<Person>;


  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }

}
