import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipientBloodComponent } from './my-recipient-blood.component';

describe('MyRecipientBloodComponent', () => {
  let component: MyRecipientBloodComponent;
  let fixture: ComponentFixture<MyRecipientBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecipientBloodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecipientBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
