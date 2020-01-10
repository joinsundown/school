import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowstudentPage } from './showstudent.page';

describe('ShowstudentPage', () => {
  let component: ShowstudentPage;
  let fixture: ComponentFixture<ShowstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
