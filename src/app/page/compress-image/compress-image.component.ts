import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  DataUrl,
  DOC_ORIENTATION,
  NgxImageCompressService,
  UploadResponse,
} from 'ngx-image-compress';

@Component({
  selector: 'app-compress-image',
  templateUrl: './compress-image.component.html',
  styleUrls: ['./compress-image.component.scss'],
})
export class CompressImageComponent implements OnInit {
  url: any;
  fileToUpload: File | null = null;
  step1 = false;
  step2 = false;
  listUrl: any = [];
  nameImage = '';
  degree = 0;

  canvas = document.createElement('canvas');

  constructor(
    private renderer: Renderer2,
    private imageCompress: NgxImageCompressService
  ) {}

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
    let a = this.listUrl[index];

    this.listUrl = this.listUrl.filter((event: any) => {
      return event != a;
    });
  }


  onSelectImage(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        // this.data.section[index].file_media.push({
        //   id: (Math.random() + 1).toString(36).substring(7),
        //   name: file.name
        // })
        // console.log(this.data.section[index].file_media);
        this.url = (<FileReader>event.target).result;
        this.nameImage = file.name;
        this.listUrl.push({
          url: this.url,
          name: file.name,
          rotateRad: 0,
          type: file.type,
        });
        console.log(this.listUrl);
        // console.log(file.name);
      };
    }
  }

  rotate(index: number) {
    this.degree += 90;
    // console.log(this.degree);
    const image = document.getElementsByClassName('blah');
    for (let i = index; i < this.listUrl.length; i++) {
      if (i == index) {
        this.renderer.setStyle(
          image[i],
          'transform',
          `rotate(${this.degree}deg)`
        );
        this.listUrl[i].rotateRad += Math.PI / 2;

      }
    }
  }

  download() {
    for (let i = 0; i < this.listUrl.length; i++) {
      console.log(this.listUrl[i].rotateRad);
      this.rotateImage(
        this.listUrl[i].url,
        this.listUrl[i].rotateRad,
        this.listUrl[i].name,
      );
    }
  }

  rotateImage = (src: any, rotateRad: any, name: string) => {
    let img = new Image();

    img.src = src;

    img.onload = () => {
      rotateImage();
    };
    let rotateImage = () => {

      let ctx: any = this.canvas.getContext('2d');


      this.canvas.width = img.width;
      this.canvas.height = img.height;

      ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

      ctx.rotate(rotateRad);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      let base64 = this.canvas.toDataURL();

      this.imageCompress
        .compressFile(base64, 50, 50, 50)
        .then((result: DataUrl) => {
          console.warn(`Compressed: ${result}`);
          console.warn(
            'Size in bytes is now:',
            this.imageCompress.byteCount(result)
          );

          this.saveImage(result, name);
        });
    };
  };

  saveImage = (base64: string, name: string) => {
    // console.log('saveImage', this.canvas);

    let a = document.createElement('a');
    a.href = base64;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
}
