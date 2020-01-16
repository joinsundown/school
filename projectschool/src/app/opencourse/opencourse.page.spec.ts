import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpencoursePage } from './opencourse.page';

describe('OpencoursePage', () => {
  let component: OpencoursePage;
  let fixture: ComponentFixture<OpencoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpencoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
