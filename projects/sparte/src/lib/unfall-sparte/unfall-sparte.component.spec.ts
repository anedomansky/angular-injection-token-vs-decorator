import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfallSparteComponent } from './unfall-sparte.component';

describe('UnfallSparteComponent', () => {
  let component: UnfallSparteComponent;
  let fixture: ComponentFixture<UnfallSparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnfallSparteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnfallSparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
