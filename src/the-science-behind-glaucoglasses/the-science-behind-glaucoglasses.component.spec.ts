import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheScienceBehindGlaucoglassesComponent } from './the-science-behind-glaucoglasses.component';

describe('TheScienceBehindGlaucoglassesComponent', () => {
  let component: TheScienceBehindGlaucoglassesComponent;
  let fixture: ComponentFixture<TheScienceBehindGlaucoglassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheScienceBehindGlaucoglassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheScienceBehindGlaucoglassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
