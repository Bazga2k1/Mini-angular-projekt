import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorConfigComponent } from './color-config.component';

describe('ColorConfigComponent', () => {
  let component: ColorConfigComponent;
  let fixture: ComponentFixture<ColorConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
