import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALaCartaComponent } from './componentes/ALaCarta/ALaCarta.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { TokenGuard } from './servicios/token.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: ALaCartaComponent,
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
