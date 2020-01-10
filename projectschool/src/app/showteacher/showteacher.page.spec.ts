import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowteacherPage } from './showteacher.page';

describe('ShowteacherPage', () => {
  let component: ShowteacherPage;
  let fixture: ComponentFixture<ShowteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowteacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
