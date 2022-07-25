import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  public getPlateList(parametros: any): Observable<any> {
    return this.http.get('https://api.spoonacular.com/food/menuItems/suggest', {
      params: parametros,
    });
  }

  public getMenuPlates(id: any, parametros: any) {
    return this.http.get('https://api.spoonacular.com/food/menuItems/' + id, {
      params: parametros,
    });
  }
}
