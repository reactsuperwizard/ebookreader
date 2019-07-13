import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexhomePage } from './indexhome.page';

describe('IndexhomePage', () => {
  let component: IndexhomePage;
  let fixture: ComponentFixture<IndexhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
