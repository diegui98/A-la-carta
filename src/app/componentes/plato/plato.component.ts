import { Component, Input, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/servicios/plato.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css'],
})
export class PlatoComponent implements OnInit {
  showId!: number;
  @Input() menuPlate: any;
  plateImg: any;

  constructor(private platoService: PlatoService) {}

  ngOnInit() {
    this.platoService.getPlateImgById(this.menuPlate.id).subscribe((data) => {
      this.plateImg = data;
    });
  }

  showDetails(id: number) {
    if (this.showId !== id) {
      this.showId = id;
    } else {
      this.showId = 0;
    }
  }
}
