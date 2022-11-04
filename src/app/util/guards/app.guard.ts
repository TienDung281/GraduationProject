import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppGuard implements CanLoad, CanActivate {

  constructor(
    public router: Router
  ) {}

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('aaaaaaa')
    if (!localStorage.getItem('access_token')) {
      alert('Vui lòng đăng nhập để thực hiện chức năng này!')
      // this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    const token = localStorage.getItem('access_token');

    if (!token) {
      alert("Vui lòng đăng nhập để sử dụng tính năng này")
      this.router.navigate(['main/home']);
      return false;
    } else {
      return true;
    }

  }
}
