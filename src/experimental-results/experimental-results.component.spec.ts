import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalResultsComponent } from './experimental-results.component';

describe('ExperimentalResultsComponent', () => {
  let component: ExperimentalResultsComponent;
  let fixture: ComponentFixture<ExperimentalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperimentalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
