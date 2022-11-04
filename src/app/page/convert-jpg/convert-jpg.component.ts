import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-convert-jpg',
  templateUrl: './convert-jpg.component.html',
  styleUrls: ['./convert-jpg.component.scss']
})
export class ConvertJpgComponent implements OnInit {
  url: any;
  ctx:any
  name:any;
  constructor() { }
   ctx2:any
  @ViewChild('myCanvas')
  myCanvas!: ElementRef<HTMLCanvasElement>;

  public context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.myCanvas.nativeElement;
  }

  ngOnInit(): void {

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
        // this.nameImage = file.name;
        // this.listUrl.push({
        //   url: this.url,
        //   name: file.name,
        //   rotateRad: 0,
        //   type: file.type,
        // });
        // console.log(this.listUrl);
        // console.log(file.name);
      };
    }
  }
  // canvas = document.createElement('canvas');
  img:any
  preview(input: any) {
    // console.log(input)
    console.log(input.target.files[0])
    this.name = input.target.files[0]
    if (input.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            if (!this.img) {
                this.img = new Image();
            }

            this.img.src = (e.target as any).result;
            this.img.onload = () => {

              this.ctx2 = <CanvasRenderingContext2D>this.ctx.getContext('2d');
                this.ctx2.drawImage(this.img, 0, 0, 300, 200);

                let dataUrl = (<HTMLCanvasElement>this.ctx).toDataURL('image/jpeg', 0.7);
                // console.log(dataUrl);
                this.url = dataUrl;

            };
        }
        reader.readAsDataURL(input.target.files[0]);

    }

}

saveImage = (img_name: any) => {
  let a = document.createElement('a');
  a.href = this.url;
  a.download = img_name;
  console.log(this.url);

  // document.body.appendChild(a);
  a.click();
}

}
