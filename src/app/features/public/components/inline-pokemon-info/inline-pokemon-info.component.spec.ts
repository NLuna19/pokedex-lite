import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePokemonInfoComponent } from './inline-pokemon-info.component';

describe('InlinePokemonInfoComponent', () => {
  let component: InlinePokemonInfoComponent;
  let fixture: ComponentFixture<InlinePokemonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePokemonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
