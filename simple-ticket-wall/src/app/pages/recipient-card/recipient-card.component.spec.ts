import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientCardComponent } from './recipient-card.component';

describe('RecipientCardComponent', () => {
  let component: RecipientCardComponent;
  let fixture: ComponentFixture<RecipientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
