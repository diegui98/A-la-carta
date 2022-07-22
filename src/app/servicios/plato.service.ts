import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  parametros = {
    apiKey: environment.apiKey,
  };

  constructor(private http: HttpClient) {}

  public getPlateImgById(id: number) {
    return this.http.get(
      'https://images.spoonacular.com/file/wximages/' + id + '-636x393.png',
      {
        params: this.parametros,
      }
    );
  }
}
