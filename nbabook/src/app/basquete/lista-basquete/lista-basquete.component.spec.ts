import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBasqueteComponent } from './lista-basquete.component';

describe('ListaBasqueteComponent', () => {
  let component: ListaBasqueteComponent;
  let fixture: ComponentFixture<ListaBasqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBasqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBasqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
