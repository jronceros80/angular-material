import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  colors = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
