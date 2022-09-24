import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseRequest } from 'src/app/models/interfaces/general.interfaces';
import { IRelevantProduct } from 'src/app/models/interfaces/views/screens/home.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getRelevantUsers(): Observable<IResponseRequest<Array<IRelevantProduct>>> {
    return this.http.get<IResponseRequest<Array<IRelevantProduct>>>(`${environment.apiUrl}/products/get-relevant-products`);
  }
}
