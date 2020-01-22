import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatelistnamestudentPage } from './updatelistnamestudent.page';

describe('UpdatelistnamestudentPage', () => {
  let component: UpdatelistnamestudentPage;
  let fixture: ComponentFixture<UpdatelistnamestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelistnamestudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatelistnamestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
