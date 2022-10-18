import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

import { LoginpageComponent } from "./loginpage.component";





@NgModule({
  declarations: [LoginpageComponent, ForgotPasswordComponent],
  imports: [
      CommonModule,
      RouterModule.forChild([{
          path: '',
          component: LoginpageComponent
      },
      {
          path: 'forgot',
          component: ForgotPasswordComponent
      }

    ]),
      ReactiveFormsModule,FormsModule,HttpClientModule,

  ],
  exports: [LoginpageComponent,ForgotPasswordComponent]
})

export class LoginpageModule { }
