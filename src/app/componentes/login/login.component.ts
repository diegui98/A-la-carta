import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AutenticacionService } from 'src/app/servicios/Autenticacion.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginUsuario!: LoginUsuario;
  loginButtonStatus: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(event: Event) {
    this.loginButtonStatus = false;
    this.loginUsuario = new LoginUsuario(
      this.email?.value,
      this.password?.value
    );
    this.autenticacionService.login(this.loginUsuario).subscribe(
      (data) => {
        this.autenticacionService.setToken(data.token);
        this.router.navigate(['/home']);
      },
      (err) => {
        this.loginButtonStatus = true;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error al autenticar: ' + err.statusText,
        });
      }
    );
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
