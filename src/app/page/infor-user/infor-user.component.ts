import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewProfileService } from 'src/app/services/viewProfile.service';

@Component({
  selector: 'app-infor-user',
  templateUrl: './infor-user.component.html',
  styleUrls: ['./infor-user.component.scss']
})
export class InforUserComponent implements OnInit {
  data:any;
  info:any;
  constructor(
    public router: Router,
    private view: ViewProfileService
  ) { }

  ngOnInit(): void {
    this.view.viewProfile(this.data).subscribe((res:any) => {
      console.log(res)
      this.info = res.content
    })
  }

  back() {
    this.router.navigate(['main/home'])
  }

}
