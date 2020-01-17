import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailcourseteacherPage } from './detailcourseteacher.page';

describe('DetailcourseteacherPage', () => {
  let component: DetailcourseteacherPage;
  let fixture: ComponentFixture<DetailcourseteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcourseteacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailcourseteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
