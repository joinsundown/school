import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateteacherPage } from './updateteacher.page';

describe('UpdateteacherPage', () => {
  let component: UpdateteacherPage;
  let fixture: ComponentFixture<UpdateteacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateteacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateteacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
