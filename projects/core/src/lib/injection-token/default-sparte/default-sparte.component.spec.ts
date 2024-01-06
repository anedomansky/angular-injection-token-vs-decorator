import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSparteComponent } from './default-sparte.component';

describe('DefaultSparteComponent', () => {
  let component: DefaultSparteComponent;
  let fixture: ComponentFixture<DefaultSparteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultSparteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultSparteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
