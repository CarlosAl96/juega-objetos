import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordsPageComponent } from './medical-records-page.component';

describe('MedicalRecordsPageComponent', () => {
  let component: MedicalRecordsPageComponent;
  let fixture: ComponentFixture<MedicalRecordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalRecordsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
