import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PowerPointService {
  constructor(private http: HttpClient) {
  }

  queryPPT(resourceType: string, pageNo: number) {
    return null;
  }
}
