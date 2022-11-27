import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentComponent } from "src/app/component/content/content.component";
import { HeaderComponentModule } from "src/app/component/header/header.component";
import { AroundImageComponent } from "src/app/page/around-image/around-image.component";
import { CompressImageComponent } from "src/app/page/compress-image/compress-image.component";
import { ConfirmOtpComponent } from "src/app/page/confirm-otp/confirm-otp.component";
import { ConvertJpgComponent } from "src/app/page/convert-jpg/convert-jpg.component";
import { ConvertPngComponent } from "src/app/page/convert-png/convert-png.component";
import { CropImageComponent } from "src/app/page/crop-image/crop-image.component";
import { DrawImageComponent } from "src/app/page/draw-image/draw-image.component";
import { HomeComponent } from "src/app/page/home/home.component";
import { InforUserComponent } from "src/app/page/infor-user/infor-user.component";
import { LoginpageModule } from "src/app/page/loginpage/loginpage.module";
import { MemeImageComponent } from "src/app/page/meme-image/meme-image.component";
import { PhotoEditorComponent } from "src/app/page/photo-editor/photo-editor.component";
import { ResizeComponent } from "src/app/page/resize/resize.component";
import { SignupComponent } from "src/app/page/signup/signup.component";
import { AppGuard } from "src/app/util/guards/app.guard";
import { MainLayoutComponent } from "./main-layout.component";

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent, ContentComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild([{
          path: 'main',
          component: MainLayoutComponent,
          children: [
            {
              path: 'login',
              loadChildren: () => import('../../page/loginpage/loginpage.module')
                  .then(m => m.LoginpageModule)
            },
            {
              path: 'home',
              component: HomeComponent
              // loadChildren: () => import('../../page/home/home.component')
              //     .then(m => m.HomeComponentModule)
            },
            {
              path: 'signup',
              component : SignupComponent,
            },
            {
              path: 'confirm-otp',
              component : ConfirmOtpComponent,
            },
            {
              path: 'compress-image',
              canActivate: [AppGuard],
              component: CompressImageComponent,
            },
            {
              path: 'resize',
              canActivate: [AppGuard],
              component: ResizeComponent,
            },
            {
              path: 'crop-image',
              canActivate: [AppGuard],
              component: CropImageComponent,
            },
            {
              path: 'meme',
              canActivate: [AppGuard],
              component: MemeImageComponent,
            },
            {
              path: 'convert',
              canActivate: [AppGuard],
              component: ConvertJpgComponent,
            },
            {
              path: 'convert-png',
              canActivate: [AppGuard],
              component: ConvertPngComponent,
            },
            {
              path: 'draw',
              canActivate: [AppGuard],
              component: DrawImageComponent,
            },
            {
              path: 'around',
              canActivate: [AppGuard],
              component: AroundImageComponent,
            },
            {
              path: 'info',
              canActivate: [AppGuard],
              component: InforUserComponent,
            },
            {
              path: 'editor',
              canActivate: [AppGuard],
              component: PhotoEditorComponent,
            },
          ],
      }
    ]),
    HeaderComponentModule

  ],
  exports: [MainLayoutComponent, HomeComponent, ContentComponent]
})

export class MainLayoutComponentModule { }
