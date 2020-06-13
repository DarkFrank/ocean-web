import {Component} from '@angular/core';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {

  array = [1, 2, 3, 4];
  resource = {
    id: '1-200530122201-50.jpg',
    name: '1-200611100643.jpg',
    classification: '自我介绍',
    showRatio: '16:9',
    fileFormat: 'PPTX',
    downloadTimes: '10',
    pageNum: '2',
    fileSize: '3.6M',
    effect: '动态',
    description: 'description'
  };
  resourceURL = 'http://www.ypppt.com/uploads/allimg/200611/';
}
