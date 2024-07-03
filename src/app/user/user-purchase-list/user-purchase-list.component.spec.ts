import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchaseListComponent } from './user-purchase-list.component';

describe('UserPurchaseListComponent', () => {
  let component: UserPurchaseListComponent;
  let fixture: ComponentFixture<UserPurchaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPurchaseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
