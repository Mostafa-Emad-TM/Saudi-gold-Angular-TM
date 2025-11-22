import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloysDetailsComponent } from './alloys-details.component';

describe('AlloysDetailsComponent', () => {
  let component: AlloysDetailsComponent;
  let fixture: ComponentFixture<AlloysDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlloysDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
