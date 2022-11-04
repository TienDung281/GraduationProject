import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-around-image',
  templateUrl: './around-image.component.html',
  styleUrls: ['./around-image.component.scss']
})
export class AroundImageComponent implements OnInit {
  url: any;
  fileToUpload: File | null = null;
  step1 = false;
  step2 = false;
  listUrl: any = [];
  nameImage = '';
  degree = 0;
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
    for(let i = 0; i < this.listUrl.length; i++) {
      // const a = document.createElement('a');
      // a.href = this.listUrl[i].url;
      // a.download = this.listUrl[i].name;
      // document.body.appendChild(a);
      // a.click();
      // console.log(this.nameImage)
      // console.log(this.listUrl[i].url)
      console.log( this.listUrl[i].rotateRad);

      this.rotateImage(this.listUrl[i].url, this.listUrl[i].rotateRad,this.listUrl[i].name)
    }
  }

  canvas = document.createElement("canvas");
  rotateImage = (src: any, rotateRad: any, name: string) => {
    let img = new Image();
    img.src = src;
    // Create a canvas object.
    // Wait till the image is loaded.
    img.onload = () => {
        rotateImage();
        this.saveImage(name);
    }
    let rotateImage = () => {
        // Create canvas context.
        let ctx: any = this.canvas.getContext("2d");

        // Assign width and height.
        this.canvas.width = img.width;
        this.canvas.height = img.height;

        ctx.translate(this.canvas.width / 2,this.canvas.height / 2);

        // Rotate the image and draw it on the canvas.
            // (I am not showing the canvas on the webpage.
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
