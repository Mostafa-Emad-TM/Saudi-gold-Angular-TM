import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideParComponent } from './side-par.component';

describe('SideParComponent', () => {
  let component: SideParComponent;
  let fixture: ComponentFixture<SideParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideParComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
