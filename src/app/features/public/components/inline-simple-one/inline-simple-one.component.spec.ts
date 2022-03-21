import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSimpleOneComponent } from './inline-simple-one.component';

describe('InlineSimpleOneComponent', () => {
  let component: InlineSimpleOneComponent;
  let fixture: ComponentFixture<InlineSimpleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineSimpleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSimpleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
