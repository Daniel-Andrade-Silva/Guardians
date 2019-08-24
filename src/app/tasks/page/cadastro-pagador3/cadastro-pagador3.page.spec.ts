import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPagador3Page } from './cadastro-pagador3.page';

describe('CadastroPagador3Page', () => {
  let component: CadastroPagador3Page;
  let fixture: ComponentFixture<CadastroPagador3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPagador3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPagador3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});