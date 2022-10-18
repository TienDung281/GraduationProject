import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data:any;
  email = '';
  password = '';

  constructor(
    public router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['main/login']);
  }

  signup() {
    this.data = {
      email: this.email,
      password: this.password
    };
    this.loginService.register(this.data).subscribe((res:any) => {
      console.log(res);
    })
  }
}





@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule

  ],

  exports: [SignupComponent],

})
export class SignupModule {}

