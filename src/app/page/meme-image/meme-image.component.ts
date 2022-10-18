import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meme-image',
  templateUrl: './meme-image.component.html',
  styleUrls: ['./meme-image.component.scss']
})
export class MemeImageComponent implements OnInit {
  url: any;
  nameImage: any;
  listUrl: any = [];
  image = new Image();
  textAbove = '';
  textBelow = '';
  baseLine: CanvasTextBaseline = "top";

  @ViewChild('canvasEl') canvasEl!: ElementRef;
  private context!: CanvasRenderingContext2D | null;

  constructor() { }

  ngOnInit(): void {

  }
  onUpFile(data: any){
    const imageDataURL = URL.createObjectURL(data.target.files[0])
    this.image = new Image();
    this.image.src = imageDataURL;
  }

  ngAfterViewInit() {
    this.context = (
      this.canvasEl.nativeElement as HTMLCanvasElement
    ).getContext('2d');


  }

  loadImage() {

    const width = this.image.width;
    const height = this.image.height;
    const yOffSet = height / 7;

    this.canvasEl.nativeElement.width = width;
    this.canvasEl.nativeElement.height = height;
    this.context?.drawImage(this.image, 0, 0);
    this.context!.font = 'Bold 30px Sans-serif';
    this.context!.fillStyle = 'white';
    this.context!.strokeStyle = 'black';
    this.context?.fillText(this.textAbove, width / 6, yOffSet);
    this.context?.strokeText(this.textAbove, width / 6, yOffSet,350);
    this.context?.fillText(this.textBelow, width / 6, height - yOffSet);
    this.context?.strokeText(this.textBelow, width / 6, height - yOffSet,350);

  }

  download(){
    let a = document.createElement('a');
    a.href = this.canvasEl.nativeElement.toDataURL("image/jpeg");
    a.download = 'test.jpeg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

}
