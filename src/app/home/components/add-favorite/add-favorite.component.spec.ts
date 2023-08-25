import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteComponent } from './add-favorite.component';

describe('AddFavoriteComponent', () => {
  let component: AddFavoriteComponent;
  let fixture: ComponentFixture<AddFavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFavoriteComponent]
    });
    fixture = TestBed.createComponent(AddFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
