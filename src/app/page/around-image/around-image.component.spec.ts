import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AroundImageComponent } from './around-image.component';

describe('AroundImageComponent', () => {
  let component: AroundImageComponent;
  let fixture: ComponentFixture<AroundImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AroundImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
