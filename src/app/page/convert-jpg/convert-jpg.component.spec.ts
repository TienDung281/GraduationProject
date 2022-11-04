import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertJpgComponent } from './convert-jpg.component';

describe('ConvertJpgComponent', () => {
  let component: ConvertJpgComponent;
  let fixture: ComponentFixture<ConvertJpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertJpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertJpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
