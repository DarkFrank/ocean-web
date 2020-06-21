import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PowerPointService} from '../../../service/PowerPointService';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit{

  powerpointId = '7680633d-2d9f-4dc7-849a-478a25998160';
  resourceURL = 'http://123.56.128.130/ocean/images/'; // 缩略图地址
  previewPictures = [];
  constructor(private router: Router,
              private http: HttpClient,
              private powerPointService: PowerPointService) {
  }
  ngOnInit(): void {
    this.powerPointService.getImagesByPowerpointId(this.powerpointId).subscribe(
      (result: any) => {
        this.previewPictures = result;
      }
    );
  }
}
