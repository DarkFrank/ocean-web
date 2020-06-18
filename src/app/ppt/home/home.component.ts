import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PowerPointService } from '../../../service/PowerPointService';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    pageNo = 1; // 页码
    pageIndex = 1;
    pageSize = 6; // 每页显示条数
    totalCount = 0; // 页面总数
    resourceList = []; // 资源数组
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
        '关于我们',
        '版权声明',
        '意见建议',
        '联系方式',
        '友链申请',
        '网站地图'
    ];
    pageList: any = [];
    /*展示模块的控制变量*/
    showNavMap: {[name: string]: boolean} = {
        showTemplate: true
        , showBackground: false
    };

    // pageList = [
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   },
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   },
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   },
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   },
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   },
    //   {
    //     id: '1-200530122201-50.jpg',
    //     name: '1-200611100643.jpg',
    //     classification: '自我介绍',
    //     showRatio: '16:9',
    //     fileFormat: 'PPTX',
    //     downloadTimes: '10',
    //     pageNum: '2',
    //     fileSize: '3.6M',
    //     effect: '动态',
    //     description: 'description'
    //   }
    // ];

    constructor(private router: Router,
                private http: HttpClient,
                private powerPointService: PowerPointService) {
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
        // window.open('#/powerpoint-detail');
        window.open('/detail');
        // this.router.navigateByUrl('/detail');
    }

    ngOnInit(): void {
        // 查询模板数据信息
        // this.queryResources('pptTemplate');
        this.getPPT(this.pageIndex, this.pageSize);
    }

    searchData() {
        this.getPPT(this.pageIndex, this.pageSize);
    }


    getPPT(pageIndex, pageSize) {
        this.powerPointService.getPPT(this.pageIndex, this.pageSize).subscribe(
            (result: any) => {
                this.pageList = result.content;
                this.totalCount = result.totalElements;
            }
        );
    }

    // private queryResources(resourceType: string) {
    //     this.powerPointService.queryPPT(resourceType, this.pageNo).subscribe(response => {
    //         // 赋值
    //         this.resourceList = response.data; // 列表全部数据
    //     });
    // }

}
