import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseRequest } from 'src/app/models/interfaces/general.interfaces';
import {
  IRoutesMenu,
  ISsocialNetworks,
} from 'src/app/models/interfaces/views/components/header.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  getSocialNetworks(): Observable<IResponseRequest<Array<ISsocialNetworks>>> {
    return this.http.get<IResponseRequest<Array<ISsocialNetworks>>>(
      `${environment.apiUrl}/social-networks/get-social-networks`
    );
  }

  headerMenuItems(): Array<IRoutesMenu> {
    return [
      {
        path: '/',
        name: 'Inicio',
      },
      {
        path: '/store',
        name: 'Tienda',
      },
      {
        path: '/store/offers',
        name: 'Ofertas',
      },
      {
        path: '/contact-us',
        name: 'Contactanos',
      },
    ];
  }
}
