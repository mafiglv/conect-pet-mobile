import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoteComAmorPage } from './adote-com-amor.page';

describe('AdoteComAmorPage', () => {
  let component: AdoteComAmorPage;
  let fixture: ComponentFixture<AdoteComAmorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoteComAmorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
