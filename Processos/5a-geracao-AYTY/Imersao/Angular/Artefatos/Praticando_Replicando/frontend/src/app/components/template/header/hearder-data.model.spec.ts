import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderDataModelComponent } from './hearder-data.model.component';

describe('HearderDataModelComponent', () => {
    let component: HearderDataModelComponent;
    let fixture: ComponentFixture<HearderDataModelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HearderDataModelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HearderDataModelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});