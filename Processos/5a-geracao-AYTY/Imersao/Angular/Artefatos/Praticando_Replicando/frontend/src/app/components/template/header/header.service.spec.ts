import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
    let component: HeaderService;
    let fixture: ComponentFixture<HeaderService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});