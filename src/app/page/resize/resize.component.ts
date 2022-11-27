import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent implements OnInit, AfterViewInit{

  url: any;
  fileToUpload: File | null = null;
  step1 = false;
  step2 = false;
  listUrl: any = [];
  nameImage = '';
  degree = 0;
  ctx: any;
  img:any;

  changeWidth :any;
  changeHeight :any;

  @ViewChild('myCanvas')
  myCanvas!: ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement;
    // console.log(this.myCanvas)
  }

  constructor(
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
  preview: any;

  linkResize:any;
  resize(input: any) {
    if(input.target.files[0]) {
      console.log(input.target.files[0])
      let reader = new FileReader();
      reader.readAsDataURL(input.target.files[0]);
      reader.onload = (e) => {
        this.preview = (<FileReader>e.target).result;
        // if(!this.img) {
        //   this.img = new Image();
        // }
        // this.img.src = (<FileReader>e.target).result;

        // this.preview = (<FileReader>e.target).result;

        // this.img.onload = () => {
        //   console.log(this.ctx)
        //   const cnx = this.ctx.getContext('2d');
        //   cnx.drawImage(this.img, 0,0, this.changeWidth, this.changeHeight);
        //   const width = this.img.width;
        //   const height = this.img.height;


        //   cnx.width = this.img.width;
        //   cnx.height = this.img.height;

        //   const imgPixels = cnx.getImageData(0, 0, width, height);



        // // console.log(this.img)

        // cnx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
        // console.log(cnx.canvas.toDataURL());

        // this.linkResize = cnx.canvas.toDataURL();

        // }


          // const cnv = document.createElement('canvas');
      };

    }
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
    // for(let i = 0; i < this.listUrl.length; i++) {
    //   // const a = document.createElement('a');
    //   // a.href = this.listUrl[i].url;
    //   // a.download = this.listUrl[i].name;
    //   // document.body.appendChild(a);
    //   // a.click();
    //   // console.log(this.nameImage)
    //   // console.log(this.listUrl[i].url)
    //   console.log( this.listUrl[i].rotateRad);

    //   this.rotateImage(this.listUrl[i].url, this.listUrl[i].rotateRad,this.listUrl[i].name)
    // }

    // const cnx = this.ctx.getContext('2d');
    //       cnx.drawImage(this.img,0,0, 300, 150);

    if(!this.img) {
          this.img = new Image();
        }
        this.img.src = this.preview;


        this.img.onload = () => {
          console.log(this.ctx)
          this.ctx.width = this.changeWidth;
          this.ctx.height = this.changeHeight;
          const cnx = this.ctx.getContext('2d');
          cnx.drawImage(this.img, 0,0, this.changeWidth, this.changeHeight);

        console.log(cnx.canvas.toDataURL());

        this.linkResize = cnx.canvas.toDataURL();

        // const a = document.createElement('a');
        // a.href = this.linkResize;
        // a.download = this.nameImage;
        // document.body.appendChild(a);
        // a.click();

        }
  }

  // canvas = document.createElement("canvas");
//   rotateImage = (src: any, rotateRad: any, name: string) => {
//     let img = new Image();
//     img.src = src;
//     img.onload = () => {
//         rotateImage();
//         this.saveImage(name);
//     }
//     let rotateImage = () => {
//         let ctx: any = this.canvas.getContext("2d");

//         this.canvas.width = img.width;
//         this.canvas.height = img.height;
//         ctx.translate(this.canvas.width / 2,this.canvas.height / 2)
//         ctx.rotate(rotateRad);
//         ctx.drawImage(img, -img.width / 2, -img.height / 2);
//     }


// }
// saveImage = (img_name: any) => {
//   let a = document.createElement('a');
//   a.href = this.canvas.toDataURL("image/png");
//   a.download = img_name;
//   document.body.appendChild(a);
//   a.click();
// }

down() {
        const a = document.createElement('a');
        a.href = this.linkResize;
        a.download = this.nameImage;
        document.body.appendChild(a);
        a.click();
}


}


