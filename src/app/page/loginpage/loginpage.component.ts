import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  data:any;
  nameLogin = '';
  password = '';
  token:any;
  constructor(
    public router: Router,
    private loginService: LoginService,
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.data = {
      login_name: this.nameLogin,
      password: this.password
    }
    console.log(this.data)

  }

  signup() {
    this.router.navigate(['main/signup'])
  }

  login() {
    this.data = {
      login_name: this.nameLogin,
      password: this.password
    }
    console.log(this.data)

    this.loginService.login(this.data).subscribe((res:any) => {
      // console.log(res);
      this.token = res.content.user_token;
      this.localStorageService.set(
        'access_token',
        res.content.user_token
      );
      this.home()
    })
  }

  home() {
    this.router.navigate(['main/home'])
    setTimeout(() => {
      location.reload();
      // this.localStorageService.set(
      //   'access_token',
      //   this.token
      // );
    }, 300);
  }


}
