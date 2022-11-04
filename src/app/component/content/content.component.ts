import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }
  compress() {
    this.router.navigate(['main/compress-image'])
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
  rotate() {
    this.router.navigate(['main/around'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  convertPng() {
    this.router.navigate(['main/convert-png'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  draw() {
    this.router.navigate(['main/draw'])
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

  convert() {
    this.router.navigate(['main/convert'])
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

}
