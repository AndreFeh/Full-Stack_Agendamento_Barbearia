import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductMainComponent } from './card-product-main.component';

describe('CardProductMainComponent', () => {
  let component: CardProductMainComponent;
  let fixture: ComponentFixture<CardProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
