import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientDonorComponent } from './recipient-donor.component';

describe('RecipientDonorComponent', () => {
  let component: RecipientDonorComponent;
  let fixture: ComponentFixture<RecipientDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipientDonorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
