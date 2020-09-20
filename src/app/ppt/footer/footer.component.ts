import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PowerPointService} from '../../../service/PowerPointService';
import {$} from 'protractor';

@Component({
  selector: 'app-detail-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{

  mode = false;
  dark = true;
  barName = '';
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private powerPointService: PowerPointService,
              private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.barName = data.bar_name;
      console.log(this.barName);
    });
  }

  transferContent(content: string) {
    this.barName = content;
    // document.getElementsByTagName('body').scrollTop(0);
    // this.elementRef.nativeElement('#page').animate( {scrollTop: 0}, 500);
    // document.documentElement.scrollIntoView();
    window.scrollTo(0, 0);

  }
}
