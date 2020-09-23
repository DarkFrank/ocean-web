import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/**
 * QQ Connection service.
 */
@Injectable({providedIn: 'root'})
export class QCService {
  constructor(private http: HttpClient) {
  }
}
