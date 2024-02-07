import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimsConfigComponent } from './rims-config.component';

describe('RimsConfigComponent', () => {
  let component: RimsConfigComponent;
  let fixture: ComponentFixture<RimsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimsConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RimsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
