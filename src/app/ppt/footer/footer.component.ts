import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PowerPointService} from '../../../service/PowerPointService';

@Component({
  selector: 'app-detail-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{

  mode = false;
  dark = true;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private powerPointService: PowerPointService) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
    });
  }

}
