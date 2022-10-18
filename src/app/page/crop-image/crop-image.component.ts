import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPhotoEditorModule } from 'ngx-photo-editor';
import {NgxCroppedEvent, NgxPhotoEditorService} from "ngx-photo-editor";

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class CropImageComponent implements OnInit {
  url: any;
  fileToUpload: File | null = null;
  step1 = false;
  step2 = false;
  listUrl: any = [];
  nameImage = '';
  degree = 0;

  output?: NgxCroppedEvent;

  constructor(
    private service: NgxPhotoEditorService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (!this.url) {
      this.step1 = true;
      this.step2 = false;
    } else {
      this.step1 = false;
      this.step2 = true;
    }
  }

  deleteImg(index: number) {
    // console.log(this.listUrl[index]);
    let a = this.listUrl[index]

    this.listUrl = this.listUrl.filter((event: any) => {
      return event != a
    })

  }

  onSelectImage(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // console.log(file);

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        // this.data.section[index].file_media.push({
        //   id: (Math.random() + 1).toString(36).substring(7),
        //   name: file.name
        // })
        // console.log(this.data.section[index].file_media);
        this.url = (<FileReader>event.target).result;
        this.nameImage = file.name
        this.listUrl.push({
          url: this.url,
          name: file.name,
          rotateRad: 0
        });
        console.log(this.listUrl);
        // console.log(file.name);
      };
    }
  }

  fileChangeHandler($event: any) {
    this.service.open($event, {
      aspectRatio: 4 / 3,
      autoCropArea: 2
    }).subscribe(data => {
      this.output = data;
      this.url = this.output
      this.listUrl.push({
        url: this.url,

      });
      console.log(this.url);
    });
  }


  rotate(index: number) {

    this.degree += 90;
    // console.log(this.degree);
    const image = document.getElementsByClassName('blah');
    for(let i = index; i < this.listUrl.length;i++) {
      if(i == index) {
        this.renderer.setStyle(
          image[i],
          'transform',
          `rotate(${this.degree}deg)`
        )
        this.listUrl[i].rotateRad +=  Math.PI/2;
        console.log(this.listUrl[i].rotateRad)
        // console.log(image[i])
        // var myimg = image[i] as HTMLImageElement;
        // var mysrc = myimg.src;
        // console.log(mysrc);
        // this.rotateImage(mysrc)

      }

    }

  }
  download() {
    for(let i = 0; i < this.listUrl.length; i++) {
      // const a = document.createElement('a');
      // a.href = this.listUrl[i].url;
      // a.download = this.listUrl[i].name;
      // document.body.appendChild(a);
      // a.click();
      // console.log(this.nameImage)
      // console.log(this.listUrl[i].url)
      console.log( this.listUrl[i].rotateRad);

      this.rotateImage(this.url.base64, this.url.file.name,this.listUrl[i].name)
    }
  }

  canvas = document.createElement("canvas");
  rotateImage = (src: any, rotateRad: any, name: string) => {
    let img = new Image();
    img.src = src;

    img.onload = () => {
        rotateImage();
        this.saveImage(name);
    }
    let rotateImage = () => {

        let ctx: any = this.canvas.getContext("2d");


        this.canvas.width = img.width;
        this.canvas.height = img.height;

        ctx.translate(this.canvas.width / 2,this.canvas.height / 2);

       
        ctx.rotate(rotateRad);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
    }


}
saveImage = (img_name: any) => {
  let a = document.createElement('a');
  a.href = this.canvas.toDataURL("image/png");
  a.download = img_name;
  document.body.appendChild(a);
  a.click();
}

}

@NgModule({
  declarations: [CropImageComponent],
  imports: [CommonModule, RouterModule, FormsModule,],
  exports: [CropImageComponent]
})

export class CropImageComponentModule { }
