import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerTableComponent } from './pager-table.component';

describe('PagerTableComponent', () => {
  let component: PagerTableComponent;
  let fixture: ComponentFixture<PagerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagerTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
