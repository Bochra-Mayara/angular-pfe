import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMailsComponent } from './list-mails.component';

describe('ListMailsComponent', () => {
  let component: ListMailsComponent;
  let fixture: ComponentFixture<ListMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
