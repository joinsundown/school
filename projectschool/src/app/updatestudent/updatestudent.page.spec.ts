import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatestudentPage } from './updatestudent.page';

describe('UpdatestudentPage', () => {
  let component: UpdatestudentPage;
  let fixture: ComponentFixture<UpdatestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatestudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
