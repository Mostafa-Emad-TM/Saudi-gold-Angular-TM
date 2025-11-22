import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgesComponent } from './pledges.component';

describe('PledgesComponent', () => {
  let component: PledgesComponent;
  let fixture: ComponentFixture<PledgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PledgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
