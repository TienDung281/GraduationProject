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

  inforUser = {

    first_name: '',
    last_name: '',
    login_name: '',
    email: '',
    phone_number: '',
    password: '',
    password_1: '',
    // gender: ["N/A"],
    birth_date: '',
    // "job_title": [this.infoUserOld.job_title, Validators.required],
    // "school": [this.infoUserOld.school, [Validators.required, Validators.pattern(/^.{1,255}$/)]],
    // "province": [this.infoUserOld.province, Validators.required],
    // "address_details": [this.infoUserOld.address_details, [Validators.required, Validators.pattern(/^.{1,255}$/)]],
    // "checkbox": [this.infoUserOld.checkbox, Validators.required]
  }

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
   console.log(this.inforUser)
    this.loginService.register(this.inforUser).subscribe((res:any) => {
      // console.log(res);
      this.router.navigate(['main/confirm-otp']);
      localStorage.setItem('emailUser', JSON.stringify(this.inforUser.email));
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

