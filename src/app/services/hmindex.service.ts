import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HmindexService {

  constructor(private httpClient: HttpClient) { }
               
  getHomeData() {
    return this.httpClient.get("http://localhost/ExposureMedia/admin/public/api/HomeHouseList");
  }
