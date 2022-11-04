import { CommonModule } from '@angular/common';
import { Component, OnInit,NgModule, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-draw-image',
  templateUrl: './draw-image.component.html',
  styleUrls: ['./draw-image.component.scss']
})
export class DrawImageComponent implements OnInit, AfterViewInit {
  url: any;
  ctx: any;
  constructor() { }

  @ViewChild('myCanvas')
  myCanvas!: ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement;
    // console.log(this.myCanvas)
  }

  ngOnInit(): void {
  }


  img:any;
  linkGrey = "";
  preview: any;

  GrayScale(input: any) {
    // console.log(input.target.files[0])
    // const www = this;
    if(input.target.files[0]) {
      console.log(input.target.files[0])
      let reader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (e) => {
        if(!this.img) {
          this.img = new Image();
        }
        this.img.src = (<FileReader>e.target).result;

        this.preview = (<FileReader>e.target).result;

        this.img.onload = () => {
          console.log(this.ctx)
          const cnx = this.ctx.getContext('2d');
          cnx.drawImage(this.img,0,0, 300, 150);
          const width = this.img.width;
          const height = this.img.height;


          cnx.width = this.img.width;
          cnx.height = this.img.height;

          const imgPixels = cnx.getImageData(0, 0, width, height);


          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * 4) * width + x * 4;
                const avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }
        // console.log(this.img)

        cnx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        console.log(cnx.canvas.toDataURL());

        this.linkGrey = cnx.canvas.toDataURL();

        }

          // const cnv = document.createElement('canvas');

      };

    }
    // const myimage = new Image();
    // myimage.src = this.croppedImage.src;
}

  saveImage = (img_name: any) => {
    let a = document.createElement('a');
    a.href = this.linkGrey;
    a.download = img_name;
    document.body.appendChild(a);
    a.click();
  }

}

@NgModule({
  declarations: [DrawImageComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [DrawImageComponent]
})

export class CropImageComponentModule { }
