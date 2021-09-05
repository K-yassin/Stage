import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl='http://localhost/api';


  constructor(private http:HttpClient) { }
  getfamprodlist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/familleproduits');
  }
  getprodlist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/produits');
  }
}
