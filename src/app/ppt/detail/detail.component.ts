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
  resourceURL = 'http://123.56.128.130/ocean/images/'; // 缩略图地址
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

}
