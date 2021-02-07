import {Component, Input, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PowerPointService} from '../../../service/PowerPointService';
import {HttpClient} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() source;

  constructor(private router: Router,
              private http: HttpClient,
              private powerPointService: PowerPointService,
              private route: ActivatedRoute,
              private nzMessageService: NzMessageService) {
  }

  ngOnInit(): void {
  }

  toLogin(loginMethod: string) {
    let mid;
    if (loginMethod === 'QQ'){
      window.location.href = 'https://graph.qq.com/oauth2.0/authorize?grant_type=authorization_code' +
        '&client_secret=3988ae6f3304833dafa8a8d59a1d31f7' +
        '&client_id=101907160' +
        '&redirect_uri=http://www.91ppt.club/home?source=template' +
        '&response_type=code';
    } else if (loginMethod === 'WeChart') {
      this.nzMessageService.remove(mid);
      mid = this.nzMessageService.create('warning', `微信登陆接入中...`);
    }
  }

  agreementConfirmation() {
    let mid;
    this.nzMessageService.remove(mid);
    mid = this.nzMessageService.create('warning', `登陆/注册必须同意该协议`);
  }

}
