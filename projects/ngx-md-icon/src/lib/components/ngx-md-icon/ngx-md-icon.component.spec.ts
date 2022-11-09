import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMdIconComponent } from './ngx-md-icon.component';

describe('NgxMdsIconComponent', () => {
   let component: NgxMdIconComponent;
   let fixture: ComponentFixture<NgxMdIconComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [NgxMdIconComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(NgxMdIconComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
