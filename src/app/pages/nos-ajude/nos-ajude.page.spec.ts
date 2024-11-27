import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosAjudePage } from './nos-ajude.page';

describe('NosAjudePage', () => {
  let component: NosAjudePage;
  let fixture: ComponentFixture<NosAjudePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NosAjudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
