import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCategorySelector } from './transaction-category-selector';

describe('TransactionCategorySelector', () => {
  let component: TransactionCategorySelector;
  let fixture: ComponentFixture<TransactionCategorySelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionCategorySelector],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionCategorySelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
