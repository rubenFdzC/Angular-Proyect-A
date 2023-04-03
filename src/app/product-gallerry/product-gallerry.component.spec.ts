import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGallerryComponent } from './product-gallerry.component';

describe('ProductGallerryComponent', () => {
  let component: ProductGallerryComponent;
  let fixture: ComponentFixture<ProductGallerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGallerryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGallerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
