import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChipComponent } from './inline-chip.component';

describe('InlineChipComponent', () => {
  let component: InlineChipComponent;
  let fixture: ComponentFixture<InlineChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
