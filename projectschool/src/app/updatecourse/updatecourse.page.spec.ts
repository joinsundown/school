import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatecoursePage } from './updatecourse.page';

describe('UpdatecoursePage', () => {
  let component: UpdatecoursePage;
  let fixture: ComponentFixture<UpdatecoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatecoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
