import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstamPlansComponent } from './estam-plans.component';

describe('EstamPlansComponent', () => {
  let component: EstamPlansComponent;
  let fixture: ComponentFixture<EstamPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstamPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstamPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
