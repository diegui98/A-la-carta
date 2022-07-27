import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/Autenticacion.service';
import { MenuService } from 'src/app/servicios/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  plates: any;
  menuPlates: any = [];
  searchBtnStatus: boolean = false;
  searchRequested: boolean = false;
  selectedPlate!: number;
  selectedPlateBoolean: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private autenticacionService: AutenticacionService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.pushToMenuPlates(392199);
    this.pushToMenuPlates(327954);
    this.pushToMenuPlates(387582);
    this.pushToMenuPlates(416185);
  }

  addPlate() {
    this.searchBtnStatus = !this.searchBtnStatus;
  }

  getPlateList() {
    let parametros = {
      apiKey: environment.apiKey,
      query: this.nombre?.value,
      number: '6',
    };
    this.menuService.getPlateList(parametros).subscribe(
      (data) => {
        this.searchRequested = true;
        this.plates = data.results;

        console.log(this.plates);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  pushToMenuPlates(id: number) {
    this.searchBtnStatus = !this.searchBtnStatus;
    let parametros = {
      apiKey: environment.apiKey,
    };
    this.menuService.getMenuPlates(id, parametros).subscribe((data) => {
      this.menuPlates.push(data);
      console.log(data);
    });
  }

  setSelectedPlate(id: number) {
    this.selectedPlate = id;
    this.selectedPlateBoolean = true;
  }

  deletePlate(i: number) {
    this.menuPlates.splice(i, 1);
  }

  get nombre() {
    return this.form.get('nombre');
  }
}
