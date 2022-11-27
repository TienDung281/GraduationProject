import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import ImageEditor from 'tui-image-editor';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  title = 'angular-image-editor';
  private _tuiImageEditor!: ImageEditor;

  constructor(

  ) { }

  @ViewChild('tuiRef')
  private _tuiRef!: ElementRef<HTMLDivElement>;

  public ngAfterViewInit() {
    this._createImageEditor();
  }

  ngOnInit(): void {
    
  }

  private _createImageEditor() {
    this._tuiImageEditor = new ImageEditor(this._tuiRef.nativeElement, {
      includeUI: {
        initMenu: 'filter',
        menuBarPosition: 'bottom',
      },
      cssMaxWidth: 800,
      cssMaxHeight:600,
      usageStatistics: false,
    });


  }

}
