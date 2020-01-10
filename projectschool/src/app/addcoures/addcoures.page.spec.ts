import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcouresPage } from './addcoures.page';

describe('AddcouresPage', () => {
  let component: AddcouresPage;
  let fixture: ComponentFixture<AddcouresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcouresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcouresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
