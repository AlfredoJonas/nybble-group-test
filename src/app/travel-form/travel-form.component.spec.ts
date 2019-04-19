import { ComponentFixture, TestBed } from 'angularjs-testbed';
import { TravelFormComponent } from './travel-form.component';
import { TRAVEL } from '../mock-travel';

describe('TravelFormComponent', () => {
  let component: TravelFormComponent;
  let fixture: ComponentFixture<TravelFormComponent>;
  let dataService;
  let stateService
  let getTravelSpy;

  beforeEach(() => {
    dataService = jasmine.createSpyObj('dataService', ['getTravel']);
    stateService = jasmine.createSpyObj('stateService', ['go']);
    getTravelSpy = dataService.getTravel.and.returnValue(Promise.resolve(TRAVEL));
    TestBed.configureTestingModule({
      declarations: [TravelFormComponent],
      providers: [
        { provide: 'dataService', useValue: dataService },
        { provide: '$state', useValue: stateService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});