import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/Autenticacion.service';
import { MenuService } from 'src/app/servicios/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  plates: any;
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

  ngOnInit() {}

  addPlate() {
    this.searchBtnStatus = !this.searchBtnStatus;
  }

  getPlateList(event: Event) {
    let parametros = {
      apiKey: this.autenticacionService.getToken(),
      query: this.nombre?.value,
      number: '4',
    };
    this.menuService.getPlateList(parametros).subscribe(
      (data) => {
        this.searchRequested = true;
        this.plates = data;

        console.log(this.plates);
      },
      (err) => {
        console.log(err);
        console.log(parametros);
        this.searchRequested = true;
      }
    );
  }

  get nombre() {
    return this.form.get('nombre');
  }
}
