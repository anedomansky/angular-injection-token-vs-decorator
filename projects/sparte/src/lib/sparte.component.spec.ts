import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparteComponent } from './sparte.component';

describe('SparteComponent', () => {
  let component: SparteComponent;
  let fixture: ComponentFixture<SparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
