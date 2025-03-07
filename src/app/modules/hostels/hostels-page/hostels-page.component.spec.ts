import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelsPageComponent } from './hostels-page.component';

describe('HostelsPageComponent', () => {
  let component: HostelsPageComponent;
  let fixture: ComponentFixture<HostelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
