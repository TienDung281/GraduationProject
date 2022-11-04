import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-convert-png',
  templateUrl: './convert-png.component.html',
  styleUrls: ['./convert-png.component.scss']
})
export class ConvertPngComponent implements OnInit {
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

                let dataUrl = (<HTMLCanvasElement>this.ctx).toDataURL('image/png', 0.7);
                console.log(dataUrl);
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
  document.body.appendChild(a);
  a.click();
}

}
