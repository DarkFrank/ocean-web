import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resourceURL = 'http://www.ypppt.com/uploads/allimg/200611/';
  appURL = 'http://localhost:4200/app/detail/';
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
  /*展示模块的控制变量*/
  showNavMap: { [name: string]: boolean } = {
    showTemplate: true
    , showBackground: false
  };

  constructor() {
  }

  menuSelected() {
    console.log('selected');
  }

  /*  */
  showHandler(nav: string) {
    for (const key in this.showNavMap) {
      if (key !== nav) {
        this.showNavMap[key] = false;
      } else {
        this.showNavMap[key] = true;
      }
    }
  }

  /*新页签展示详情页*/
  openDetailPage(url: string) {
    window.open('#/powerpoint-detail');
    // this.router.navigateByUrl('/powerpoint-detail');
  }
}
