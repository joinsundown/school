import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowcoursePage } from './showcourse.page';

describe('ShowcoursePage', () => {
  let component: ShowcoursePage;
  let fixture: ComponentFixture<ShowcoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
