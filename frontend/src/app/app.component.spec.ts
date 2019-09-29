import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
      ],
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
