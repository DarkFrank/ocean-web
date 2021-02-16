import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PowerPointService {

  // domain = 'http://localhost:8080';
  // domain = 'http://123.56.128.130:8080';
  domain = 'https://91ppt.club:8080';

  constructor(private http: HttpClient) {
  }

  queryPPT(resourceType: string, pageNo: number) {
    return null;
  }

  getPPT(pageNo, pageSize, type, classification) {
    return this.http.get(this.domain + '/ocean/v1/powerpoints/' + pageNo + '/' + pageSize + '?type=' +  type
      + '&classification=' + classification).pipe();
  }

  getImagesByPowerpointId(id){
    return this.http.get(this.domain + '/ocean/v1/powerpoints/' + id + '/preview-pictures');
  }

  getPowerPointById(powerpointId: string) {
    return this.http.get(this.domain + '/ocean/v1/powerpoints/' + powerpointId);
  }

  addDownloadTimesById(id) {
    return this.http.patch(this.domain + '/ocean/v1/powerpoints/' + id + '/add-download-times', null);
  }

  getClassifications(type) {
    return this.http.get(this.domain + '/ocean/v1/powerpoints/classifications?type=' + type);
  }
}
