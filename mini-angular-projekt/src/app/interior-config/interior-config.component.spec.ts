import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorConfigComponent } from './interior-config.component';

describe('InteriorConfigComponent', () => {
  let component: InteriorConfigComponent;
  let fixture: ComponentFixture<InteriorConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteriorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
