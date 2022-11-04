import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './page/signup/signup.component';
import { CompressImageComponent } from './page/compress-image/compress-image.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from './util/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { ResizeComponent } from './page/resize/resize.component';
import { CropImageComponent } from './page/crop-image/crop-image.component';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import { MemeImageComponent } from './page/meme-image/meme-image.component';
import { ConvertJpgComponent } from './page/convert-jpg/convert-jpg.component';
import { DrawImageComponent } from './page/draw-image/draw-image.component';
import { ConfirmOtpComponent } from './page/confirm-otp/confirm-otp.component';
import { AroundImageComponent } from './page/around-image/around-image.component';
import { ConvertPngComponent } from './page/convert-png/convert-png.component';
import { InforUserComponent } from './page/infor-user/infor-user.component';



@NgModule({
  declarations: [
    AppComponent,
    CompressImageComponent,
    ResizeComponent,
    MemeImageComponent,
    ConvertJpgComponent,
    ConfirmOtpComponent,
    AroundImageComponent,
    ConvertPngComponent,
    InforUserComponent,
    // DrawImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxPhotoEditorModule,


  ],
  exports: [NgxSpinnerModule],
  providers: [
    // { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Lco49UfAAAAACng0_QUGICIiP0kKp4mAm9zbjcD" },
    // AppGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: APIInterceptor,
    //   multi: true,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
