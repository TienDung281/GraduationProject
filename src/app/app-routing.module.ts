import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/layout/main-layout/main-layout.module').then(
        (m) => m.MainLayoutComponentModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
