import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ocean-web';
  navigationBarList = [
    'PPT模板'
    , 'PPT背景'
    , 'PPT图表'
    , 'PPT素材'
    , 'PPT教程'
    , '节日PPT'
    , 'PPT字体库'
  ];
  footerNavBar = [
    '关于我们' ,
    '版权声明' ,
    '意见建议' ,
    '联系方式' ,
    '友链申请' ,
    '网站地图' ,
  ];
}
