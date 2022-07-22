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
  defaultPlates: any = [];
  searchBtnStatus: boolean = false;
  searchRequested: boolean = false;
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
    this.getDefaultPlates(392199);
    this.getDefaultPlates(327954);
    this.getDefaultPlates(387582);
    this.getDefaultPlates(416185);
  }

  addPlate() {
    this.searchBtnStatus = !this.searchBtnStatus;
  }

  getPlateList() {
    let parametros = {
      apiKey: environment.apiKey,
      query: this.nombre?.value,
      number: '4',
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

  getDefaultPlates(id: number) {
    let parametros = {
      apiKey: '7a03355e36cb4df3903706813d70d0e7', //this.autenticacionService.getToken(),
    };
    this.menuService.getDefaultPlates(id, parametros).subscribe((data) => {
      this.defaultPlates.push(data);
      console.log(data);
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }
}
