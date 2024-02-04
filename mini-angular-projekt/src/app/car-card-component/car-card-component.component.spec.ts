import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardComponentComponent } from './car-card-component.component';

describe('CarCardComponentComponent', () => {
  let component: CarCardComponentComponent;
  let fixture: ComponentFixture<CarCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
