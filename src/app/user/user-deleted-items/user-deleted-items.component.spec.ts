import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletedItemsComponent } from './user-deleted-items.component';

describe('UserDeletedItemsComponent', () => {
  let component: UserDeletedItemsComponent;
  let fixture: ComponentFixture<UserDeletedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeletedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDeletedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
