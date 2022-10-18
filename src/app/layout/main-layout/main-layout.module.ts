import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentComponent } from "src/app/component/content/content.component";
import { HeaderComponentModule } from "src/app/component/header/header.component";
import { CompressImageComponent } from "src/app/page/compress-image/compress-image.component";
import { CropImageComponent } from "src/app/page/crop-image/crop-image.component";
import { HomeComponent } from "src/app/page/home/home.component";
import { LoginpageModule } from "src/app/page/loginpage/loginpage.module";
import { MemeImageComponent } from "src/app/page/meme-image/meme-image.component";
import { ResizeComponent } from "src/app/page/resize/resize.component";
import { SignupComponent } from "src/app/page/signup/signup.component";
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
              path: 'compress-image',
              component: CompressImageComponent,
            },
            {
              path: 'resize',
              component: ResizeComponent,
            },
            {
              path: 'crop-image',
              component: CropImageComponent,
            },
            {
              path: 'meme',
              component: MemeImageComponent,
            },
          ],
      }
    ]),
    HeaderComponentModule

  ],
  exports: [MainLayoutComponent, HomeComponent, ContentComponent]
})

export class MainLayoutComponentModule { }
