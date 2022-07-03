import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRead2DatasourceComponent } from './product-read2-datasource.component';

describe('ProductRead2DatasourceComponent', () => {
    let component: ProductRead2DatasourceComponent;
    let fixture: ComponentFixture<ProductRead2DatasourceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductRead2DatasourceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductRead2DatasourceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});