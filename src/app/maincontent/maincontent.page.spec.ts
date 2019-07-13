import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentPage } from './maincontent.page';

describe('MaincontentPage', () => {
  let component: MaincontentPage;
  let fixture: ComponentFixture<MaincontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaincontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
