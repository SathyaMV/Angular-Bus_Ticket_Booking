import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedrailsComponent } from './redrails.component';

describe('RedrailsComponent', () => {
  let component: RedrailsComponent;
  let fixture: ComponentFixture<RedrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedrailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
