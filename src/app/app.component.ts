import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ocean-web';
  isVisible = false;
  isConfirmLoading = false;
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

  constructor(private router: Router) {
  }

  showPromptPage(bar: string) {
    // 展示提示栏位信息
    this.router.navigateByUrl('/prompt?bar_name=' + bar);
    // 跳转到顶部
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
