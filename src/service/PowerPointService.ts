import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PowerPointService {

  domain = 'http://123.56.128.130:8080';

  constructor(private http: HttpClient) {
  }

  queryPPT(resourceType: string, pageNo: number) {
    return null;
  }

  getPPT(pageNo, pageSize) {
    return this.http.get(this.domain + '/ocean/v1/powerpoints/' + pageNo + '/' + pageSize).pipe();
  }

}
