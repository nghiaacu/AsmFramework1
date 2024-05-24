import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillComponent } from './detaill.component';

describe('DetaillComponent', () => {
  let component: DetaillComponent;
  let fixture: ComponentFixture<DetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
