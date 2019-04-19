import { StateService } from '@uirouter/angularjs';
import { Component, Input, OnInit } from 'angular-ts-decorators';
import { Travel } from '../travel';
import { DataService } from '../data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-travel-form',
  template: require('./travel-form.component.html'),
  styles: [require('./travel-form.component.scss')]
})
export class TravelFormComponent implements OnInit {
  @Input() travel: Travel;
  @Input() remember: boolean;
  moment: any;

  /* @ngInject */
  constructor(
    private $state: StateService,
    private dataService: DataService
  ) {
    this.moment = moment;
  }

  // Get the correct number of days based on the month and year
  getDaysMonths(month: Number, year: Number): Array<Number> {
    const days = moment((year == null ? this.moment().year() : year) + '-' + (month == null ? '01' : month), 'YYYY-MM').daysInMonth();
    return Array.apply(null, { length: days }).map(Function.call, Number).map((val) => val + 1);
  }
  // Get a range of years
  getYearsRange(): Array<Number> {
    const range = 10;
    const years = Array.apply(null, { length: range }).map(Function.call, Number).map((val) => val + this.moment().year() - range + 1);
    return years;
  }

  ngOnInit(): void {
    this.getTravel();
  }

  getTravel(): void {
    this.dataService.getTravel(false)
      .then(travel => this.travel = travel);
  }

  goDetail(): void {
    this.$state.go('detail');
  }

  save(): void {
    this.dataService.saveTravel(this.travel, this.remember)
      .then(() => this.goDetail());
  }
}
