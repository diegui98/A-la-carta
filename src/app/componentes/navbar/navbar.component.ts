import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/Autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged!: boolean;

  constructor(private auntenticacionService: AutenticacionService) {}

  ngOnInit() {
    this.isLogged = this.auntenticacionService.isLogged();
  }

  onLogOut() {
    this.auntenticacionService.logOut();
  }
}
