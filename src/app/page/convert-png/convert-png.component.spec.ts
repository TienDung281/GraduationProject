import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPngComponent } from './convert-png.component';

describe('ConvertPngComponent', () => {
  let component: ConvertPngComponent;
  let fixture: ComponentFixture<ConvertPngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertPngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
