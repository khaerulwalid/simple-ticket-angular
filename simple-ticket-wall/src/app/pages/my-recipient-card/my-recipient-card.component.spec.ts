import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipientCardComponent } from './my-recipient-card.component';

describe('MyRecipientCardComponent', () => {
  let component: MyRecipientCardComponent;
  let fixture: ComponentFixture<MyRecipientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecipientCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecipientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
