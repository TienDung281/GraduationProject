import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginpageModule } from 'src/app/page/loginpage/loginpage.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checklogin = false;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.checklogin = true;
    } else {
      this.checklogin = false;
    }
    console.log(this.checklogin)
  }

  compress() {
    this.router.navigate(['main/compress-image'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
  resize() {
    this.router.navigate(['main/resize'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  meme() {
    this.router.navigate(['main/meme'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  home() {
    this.router.navigate(['main/home'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  crop() {
    this.router.navigate(['main/crop-image'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  login() {
    localStorage.clear()
    this.router.navigate(['main/login']);
    setTimeout(() => {
      window.location.reload();
    }, 300);

  }

  signup() {
    this.router.navigate(['main/signup'])
  }

}

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent]
})

export class HeaderComponentModule { }
