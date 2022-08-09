import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazModalComponent } from './baz-modal.component';

describe('BazModalComponent', () => {
  let component: BazModalComponent;
  let fixture: ComponentFixture<BazModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
