import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListDoctorWorkSlotsComponent } from './list-doctor-work-slots.component';

describe('ListDoctorWorkSlotsComponent', () => {
  let component: ListDoctorWorkSlotsComponent;
  let fixture: ComponentFixture<ListDoctorWorkSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDoctorWorkSlotsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListDoctorWorkSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
