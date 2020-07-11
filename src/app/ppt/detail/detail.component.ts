import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PowerPointService} from '../../../service/PowerPointService';
import {PowerPoint} from '../../../entity/PowerPoint';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit{

  powerpointId = '';
  resourceURL = 'http://123.56.128.130/ocean'; // 缩略图地址
  previewPictures = [];
  powerPoint: PowerPoint;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private powerPointService: PowerPointService) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.powerpointId = data.powerpointId;
    });
    this.powerPointService.getImagesByPowerpointId(this.powerpointId).subscribe(
      (result: any) => {
        this.previewPictures = result;
      }
    );
    this.powerPointService.getPowerPointById(this.powerpointId).subscribe(
      (result: any) => {
        this.powerPoint = result;
      }
    );
  }

  downloadPowerPoint(id: string) {
    // Call api to update download times.
    this.powerPointService.addDownloadTimesById(id).subscribe();
    // download times add one time.
    this.powerPoint.downloadTimes += 1;
    // Download resource.
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none');
    a.setAttribute('href', this.resourceURL + '/template/' +　id + '.zip');
    a.setAttribute('download', this.powerPoint.name);
    a.click();
  }
}
