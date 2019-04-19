import { ComponentFixture, TestBed } from 'angularjs-testbed';
import { TravelDetailComponent } from './travel-detail.component';
import { TRAVEL } from '../mock-travel';

describe('TravelDetailComponent', () => {
  let component: TravelDetailComponent;
  let fixture: ComponentFixture<TravelDetailComponent>;
  let dataService;
  let stateService
  let getTravelSpy;

  beforeEach(() => {
    dataService = jasmine.createSpyObj('dataService', ['getTravel']);
    stateService = jasmine.createSpyObj('stateService', ['go']);
    getTravelSpy = dataService.getTravel.and.returnValue(Promise.resolve(TRAVEL));
    TestBed.configureTestingModule({
      declarations: [TravelDetailComponent],
      providers: [
        { provide: 'dataService', useValue: dataService },
        { provide: '$state', useValue: stateService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
