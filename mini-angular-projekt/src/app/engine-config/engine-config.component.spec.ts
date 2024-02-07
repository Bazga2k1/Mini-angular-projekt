import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineConfigComponent } from './engine-config.component';

describe('EngineConfigComponent', () => {
  let component: EngineConfigComponent;
  let fixture: ComponentFixture<EngineConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngineConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
