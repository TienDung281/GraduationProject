import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/component/content/content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// @NgModule({
//   declarations: [HomeComponent,ContentComponent],
//   imports: [
//     CommonModule,
//     RouterModule.forChild([{
//       path: '',
//       component: HomeComponent,
//       }
//     ]),
//   ],
//   exports: [HomeComponent, ContentComponent]
// })

// export class HomeComponentModule { }
