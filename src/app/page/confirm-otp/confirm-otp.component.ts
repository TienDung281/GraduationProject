import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.scss']
})
export class ConfirmOtpComponent implements OnInit {
  otp: any;
  email:any;
  constructor(
    public router: Router,
    private login: LoginService,
  ) { }

  ngOnInit(): void {
    this.email = JSON.parse(localStorage.getItem('emailUser')!);
  }
  back() {
    this.router.navigate(['main/login'])
  }

  confirmOtp() {
    this.login.otp({email: this.email, otp: this.otp.toString()}).subscribe((res:any)=>{
      alert('Bạn đã đăng ký thành công, hãy đăng nhập để sử dụng các tính năng chỉnh sửa ảnh')
      this.router.navigate(['main/login'])
    })
  }
}
