import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListnamestudentPage } from './listnamestudent.page';

describe('ListnamestudentPage', () => {
  let component: ListnamestudentPage;
  let fixture: ComponentFixture<ListnamestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnamestudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListnamestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
