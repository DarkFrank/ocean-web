import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PowerPointService } from '../../../service/PowerPointService';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() source;

  pageNo = 1; // 页码
  pageIndex = 1;
  pageSize = 20; // 每页显示条数
  totalCount = 0; // 页面总数
  resourceList = []; // 资源数组
  resourceURL = 'http://123.56.128.130/ocean/images/'; // 缩略图地址
  classifications = [];
  templateType = '';

  // pageList: any = [];
  pageList: any [];
  defaultClassificationList = [
    '个人简历',
    '中国风',
    '优秀作品',
    '体育运动',
    '党建工作',
    '公司介绍',
    '公司企业',
    '动态模板',
    '动物模板',
    '医学医疗',
    '卡通模板',
    '商务模板',
    '培训课件',
    '婚礼爱情',
    '工业机械',
    '工作总结',
    '建筑地产',
    '开题报告',
    '影视音乐',
    '教育教学',
    '旅游旅行',
    '植物模板',
    '环境保护',
    '社会生活',
    '简约模板',
    '精美模板',
    '经济金融',
    '网络科技',
    '美食水果',
    '职业规划',
    '自我介绍',
    '自然风景',
    '艺术抽象',
    '论文答辩',
    '述职报告',
  ];
  defaultPageList =  [{
    id: '0008b45f-cccf-4729-8e77-1252421e4ef7',
    createTime: '2020-07-12T11:05:03.000+00:00',
    updateTime: '2020-07-13T15:15:54.000+00:00',
    name: '简洁大方商务咨询PPT模板',
    classification: '商务模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 1,
    pageNum: 23,
    fileSize: '711KB',
    effect: '静态',
    description: '简洁大方商务咨询PPT模板。一份简约大气的商务风格幻灯片模板，白色背景，蓝橙配色，适合咨询公司或团队建设等。',
    resourceFormat: 'rar',
    thumbnailName: '2355c474-e055-4d1f-ad9a-876ac7b91569.jpg'
  }, {
    id: '00223fde-8cb4-4696-953e-843738685651',
    createTime: '2020-07-12T11:13:15.000+00:00',
    updateTime: null,
    name: '点线粒子科技感商务PPT模板',
    classification: '网络科技',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 21,
    fileSize: '2.22MB',
    effect: '动态',
    description: '点线粒子科技感商务PPT模板。一套科技感商务汇报幻灯片模板，点线粒子效果设计，框架结构完整，动态播放。',
    resourceFormat: 'rar',
    thumbnailName: '4d118eba-25cf-405f-97e6-b3e864f99acc.jpg'
  }, {
    id: '002589c4-8753-49ef-9c67-809afa77f075',
    createTime: '2020-07-12T11:10:45.000+00:00',
    updateTime: null,
    name: '篮球主题篮球教学PPT模板',
    classification: '体育运动',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 26,
    fileSize: '2.70MB',
    effect: '动态',
    description: '篮球主题篮球教学PPT模板。一套篮球主题幻灯片模板，以篮球相关图片素材为元素设计，适合篮球教学等主题。',
    resourceFormat: 'rar',
    thumbnailName: 'bdb4b80e-727e-467f-b5be-492be590c513.jpg'
  }, {
    id: '00273e13-4362-4806-9a44-c0840e4a598e',
    createTime: '2020-07-12T11:12:04.000+00:00',
    updateTime: null,
    name: '简洁大气公司企业介绍PPT模板',
    classification: '公司介绍',
    showRatio: '宽屏16:9',
    fileFormat: 'PPTX',
    downloadTimes: 0,
    pageNum: 32,
    fileSize: '3.07MB',
    effect: '动态',
    description: '简洁大气公司企业介绍PPT模板。一套公司企业简介介绍幻灯片模板，简约大气设计，蓝色主色调，非常实用。',
    resourceFormat: 'rar',
    thumbnailName: '45cdc662-9038-4200-853c-5afa774eda55.jpg'
  }, {
    id: '006162c9-a7a8-4acf-a6e7-44045fe827c5',
    createTime: '2020-07-12T11:08:21.000+00:00',
    updateTime: null,
    name: '微立体商业创业计划书PPT模板',
    classification: '商务模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 40,
    fileSize: '2.91MB',
    effect: '动态',
    description: '微立体商业创业计划书PPT模板。一套创业商业计划书幻灯片模板，大气微立体设计风格，共40页，页面丰富实用。',
    resourceFormat: 'rar',
    thumbnailName: 'b52cab80-c091-4450-9fb2-114082c34f79.jpg'
  }, {
    id: '008843c7-7fb6-4125-adc1-9a4183421979',
    createTime: '2020-07-12T11:17:46.000+00:00',
    updateTime: '2020-08-02T03:52:39.000+00:00',
    name: '通用型工作总结报告PPT模板',
    classification: '工作总结',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 1,
    pageNum: 36,
    fileSize: '2.29MB',
    effect: '动态',
    description: '通用型工作总结报告PPT模板。一份大气实用的工作总结汇报幻灯片模板，36页，页面非常丰富，附带漂亮的动态效果。',
    resourceFormat: 'rar',
    thumbnailName: '2c1a1237-c45a-45e7-9ee7-22d13cde6223.jpg'
  }, {
    id: '00944426-b9a5-459d-977c-6a802dca92ab',
    createTime: '2020-07-12T11:19:53.000+00:00',
    updateTime: null,
    name: '简洁时尚色块竞聘演讲PPT模板',
    classification: '述职报告',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 19,
    fileSize: '1.51MB',
    effect: '动态',
    description: '简洁时尚色块竞聘演讲PPT模板。一份述职报告竞聘演讲幻灯片模板，时尚大方色块布局，经典红黑配色，动态播放。',
    resourceFormat: 'rar',
    thumbnailName: 'ba1ad731-f43a-4f45-9831-df0e1e04b937.jpg'
  }, {
    id: '00a7ec4b-0e6e-45c4-9dcf-17999b3403a4',
    createTime: '2020-07-12T11:04:27.000+00:00',
    updateTime: null,
    name: '线状古书风格PPT模板',
    classification: '中国风',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 7,
    fileSize: '1.72MB',
    effect: '静态',
    description: '这是一份以线状古书效果设计的幻灯片模板，非常有创意和古典韵味，包含目录页、图片展示页，适合古玩文玩等的展示。',
    resourceFormat: 'rar',
    thumbnailName: '3d888af1-c96a-47c3-a96b-db1586b61865.jpg'
  }, {
    id: '00bbd6ea-32b2-4b5b-9790-d7eaf0486add',
    createTime: '2020-07-12T11:23:31.000+00:00',
    updateTime: null,
    name: '简约活动策划方案汇报PPT模板',
    classification: '工作总结',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 25,
    fileSize: '3.02MB',
    effect: '动态',
    description: '简约活动策划方案汇报PPT模板。一套活动策划执行方案汇报幻灯片模板，包括活动整体思路、活动运作策划、现场执行策略、预算经费方案及预期和应急预案及其他等部分。',
    resourceFormat: 'rar',
    thumbnailName: '982ed4dc-99e5-44fd-999f-2159ae0075c4.jpg'
  }, {
    id: '00c04b9e-a8c7-4a94-9f95-594b563f53d2',
    createTime: '2020-07-12T10:59:45.000+00:00',
    updateTime: '2020-07-13T13:11:52.000+00:00',
    name: '动态彩色可爱儿童卡通PPT模板',
    classification: '卡通模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 1,
    pageNum: 38,
    fileSize: '1.80MB',
    effect: '动态',
    description: '动态彩色可爱儿童卡通PPT模板。一套精美可爱卡通风格幻灯片模板，多彩彩色配色，动态播放，页面类型丰富。',
    resourceFormat: 'rar',
    thumbnailName: '8137e595-31b1-49d6-bdc3-576979161c92.jpg'
  }, {
    id: '00c568c3-b39a-489f-ad15-9c8ec8cf3ab1',
    createTime: '2020-07-12T11:17:48.000+00:00',
    updateTime: null,
    name: '俯视城市远景商务汇报PPT模板',
    classification: '商务模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 19,
    fileSize: '2.16MB',
    effect: '动态',
    description: '俯视城市远景商务汇报PPT模板。一套大气商务汇报幻灯片模板，城市俯视图背景，metro风格大色块排版。',
    resourceFormat: 'rar',
    thumbnailName: 'c0135b07-1722-45b7-abca-6316e1ff3359.jpg'
  }, {
    id: '0107273a-77ab-4ad2-a5a7-a65dcd99b1b2',
    createTime: '2020-07-12T10:58:05.000+00:00',
    updateTime: null,
    name: '彩色微立体工作总结计划PPT模板',
    classification: '工作总结',
    showRatio: '宽屏16:9',
    fileFormat: 'PPTX',
    downloadTimes: 0,
    pageNum: 23,
    fileSize: '805KB',
    effect: '动态',
    description: '彩色微立体工作总结计划PPT模板。一套工作总结计划汇报幻灯片模板，微立体视觉效果，多彩配色，动态播放。',
    resourceFormat: 'rar',
    thumbnailName: '6aeec573-c856-4516-9612-bf4ce94a4b94.jpg'
  }, {
    id: '0128efc6-b88f-4d8b-a6c2-64de9dbf01dc',
    createTime: '2020-07-12T11:14:55.000+00:00',
    updateTime: null,
    name: '带头像简历动态PPT模板',
    classification: '个人简历',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 9,
    fileSize: '2.14MB',
    effect: '动态',
    description: '这是一份漂亮的个人简历PPT模板。小清新的风格，扁平化的设计，动态的切换效果，包括个人概况、兴趣爱好、任职经历、性格分析等内容页面。',
    resourceFormat: 'rar',
    thumbnailName: 'ce54d781-aa79-41ed-969c-ce984273cd50.jpg'
  }, {
    id: '013d5dc6-cf8e-4d31-93ea-fecd8547f79c',
    createTime: '2020-07-12T11:10:36.000+00:00',
    updateTime: null,
    name: '矢量扁平化个人简历PPT模板',
    classification: '个人简历',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 6,
    fileSize: '165KB',
    effect: '动态',
    description: '矢量扁平化个人简历PPT模板。一份个人简历幻灯片模板，采用矢量扁平化设计风格，很有设计感。',
    resourceFormat: 'rar',
    thumbnailName: '6ca50264-d07b-4565-b3cf-2269d6c3dbad.jpg'
  }, {
    id: '017b86a3-3caf-49a3-889b-31afe813b96b',
    createTime: '2020-07-12T11:19:10.000+00:00',
    updateTime: '2020-07-13T03:43:21.000+00:00',
    name: '喜迎学习十九大PPT模板',
    classification: '党建工作',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 1,
    pageNum: 28,
    fileSize: '3.72MB',
    effect: '动态',
    description: '喜迎学习十九大PPT模板。一套中国共产党第十九次全国代表大会主题幻灯片模板，适合喜迎、学习十九大等用途。',
    resourceFormat: 'rar',
    thumbnailName: '85176b1e-57cf-4ba1-8b2e-a0c6c8c6f98e.jpg'
  }, {
    id: '0184d85e-1595-4dd7-a3d6-4745db1522b5',
    createTime: '2020-07-12T11:12:16.000+00:00',
    updateTime: null,
    name: '《Bello》小黄人PPT模板',
    classification: '卡通模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 20,
    fileSize: '2.74MB',
    effect: '动态',
    description: '《Bello》小黄人主题PPT模板。小黄人是《神偷奶爸》中的角色，这群小家伙凭借卖萌的一招在全球赢得了无数的粉丝。',
    resourceFormat: 'rar',
    thumbnailName: '7932d76b-0ca2-4125-a570-fa2f9c55de11.jpg'
  }, {
    id: '01bad217-477c-4f7c-b251-a87647a5c701',
    createTime: '2020-07-12T11:20:36.000+00:00',
    updateTime: null,
    name: '简约大气信息化教学PPT模板',
    classification: '教育教学',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 23,
    fileSize: '511KB',
    effect: '动态',
    description: '简约大气信息化教学PPT模板。一套教育教学课件模板，简约大气设计风格，蓝色主色调，适合信息化教学使用。',
    resourceFormat: 'rar',
    thumbnailName: 'cf7f81f8-1b48-468c-8007-30cf3c56ec03.jpg'
  }, {
    id: '01f165af-2b91-47c4-8597-ccd4711c9875',
    createTime: '2020-07-12T11:00:46.000+00:00',
    updateTime: '2020-07-26T17:34:23.000+00:00',
    name: '公司介绍宣讲招聘会PPT模板',
    classification: '公司介绍',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 1,
    pageNum: 25,
    fileSize: '4.36MB',
    effect: '动态',
    description: '公司介绍宣讲招聘会PPT模板。一套设计精美的招聘会通用幻灯片模板，适合校园招聘等。',
    resourceFormat: 'rar',
    thumbnailName: '474becbf-4a53-4a3d-966c-f7d843553225.jpg'
  }, {
    id: '0203d558-4c42-4467-abac-f5b6ae0aaea4',
    createTime: '2020-07-12T11:23:31.000+00:00',
    updateTime: null,
    name: '淡雅多色多功能通用PPT模板',
    classification: '艺术抽象',
    showRatio: '宽屏16:9',
    fileFormat: '.ppt',
    downloadTimes: 0,
    pageNum: 23,
    fileSize: '355KB',
    effect: '静态',
    description: '淡雅多色多功能通用PPT模板。抽象艺术设计花朵主元素，页面丰富齐全，用途广泛，能胜任多种场合。',
    resourceFormat: 'rar',
    thumbnailName: '40c452c7-1411-4117-b124-ed19e4e1fa05.jpg'
  }, {
    id: '0214f3d5-467d-4ad3-92aa-6ac8c594d629',
    createTime: '2020-07-12T11:01:57.000+00:00',
    updateTime: null,
    name: '创意立体质感金属商务PPT模板',
    classification: '商务模板',
    showRatio: '宽屏16:9',
    fileFormat: '.pptx',
    downloadTimes: 0,
    pageNum: 29,
    fileSize: '1.62MB',
    effect: '动态',
    description: '创意立体质感金属商务PPT模板。一套大气商务风格幻灯片模板，创意质感金属效果设计，华丽炫酷动态播放效果。',
    resourceFormat: 'rar',
    thumbnailName: '9ceb63c9-6b08-417c-8acd-a296e9fd8882.jpg'
  }];
  /*展示模块的控制变量*/
  showNavMap: {[name: string]: boolean} = {
      showTemplate: true
      , showBackground: false
  };

  constructor(private router: Router,
              private http: HttpClient,
              private powerPointService: PowerPointService,
              private route: ActivatedRoute) {
    console.log(this.pageList);
  }

  ngOnInit(): void {
    // 查询模板数据信息
    this.route.queryParams.subscribe((data) => {
      this.source = data.source;
      this.searchData(this.templateType);
    });
    // 查询模板分类信息
    this.powerPointService.getClassifications().subscribe(
      (result: any) => {
        if (result == null){
          // 没有返回结果有两种情况：a服务不可用 b客户端IP命中黑名单规则
          this.classifications = this.defaultClassificationList;
        } else {
          this.classifications = result;
        }
      }
    );
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
  openDetailPage(powerpointId: string) {
    // 新标签页打开
    window.open('/detail?powerpointId=' + powerpointId);
    // 当前页跳转
    // this.router.navigateByUrl('/detail?powerpointId=' + powerpointId);
  }

  searchData(templateType: string) {
    this.templateType = templateType;
    this.powerPointService.getPPT(this.pageIndex, this.pageSize, templateType).subscribe(
      (result: any) => {
        this.pageList = result.content;
        this.totalCount = result.totalElements;
      }
    );
  }
}
