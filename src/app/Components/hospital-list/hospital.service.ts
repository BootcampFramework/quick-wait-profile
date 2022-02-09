import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHospitalListItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }


  getHospitalList(): Observable<IHospitalListItem[]> {

    return this.http.get<IHospitalListItem[]>('http://localhost:9009/v1/nearest-hospitals?longitude=-43.944186709841304&latitude=-19.950449118559817&radix=5.0');
  }

}
