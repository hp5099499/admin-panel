import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {
APIURL="http://localhost:3000/chartdata";

  constructor(private _http:HttpClient) {

   }
   showdata(){
    return this._http.get(this.APIURL);
   }
}
