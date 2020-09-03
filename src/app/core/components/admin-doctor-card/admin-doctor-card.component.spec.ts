import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminDoctorCardComponent } from './admin-doctor-card.component';

describe('AdminDoctorCardComponent', () => {
  let component: AdminDoctorCardComponent;
  let fixture: ComponentFixture<AdminDoctorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDoctorCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDoctorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
