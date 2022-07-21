import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css'],
})
export class PlatoComponent implements OnInit {
  showId!: number;

  constructor() {}

  ngOnInit() {}

  showDetails(id: number) {
    if (this.showId !== id) {
      this.showId = id;
    } else {
      this.showId = 0;
    }
  }
}
