import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Output() propagar = new EventEmitter<string>();
  @Input() software: string;

  ngOnInit() {
  }

  onPropagar() {
    this.propagar.emit(this.software);
  }
}
