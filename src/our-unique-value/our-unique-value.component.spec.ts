import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurUniqueValueComponent } from './our-unique-value.component';

describe('OurUniqueValueComponent', () => {
  let component: OurUniqueValueComponent;
  let fixture: ComponentFixture<OurUniqueValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurUniqueValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurUniqueValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
