import { StateService } from '@uirouter/angularjs';
import { Component, OnInit } from 'angular-ts-decorators';
import { Travel } from '../travel';
import { DataService } from '../data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-travel-detail',
  template: require('./travel-detail.component.html'),
  styles: [require('./travel-detail.component.scss')]
})
export class TravelDetailComponent implements OnInit {
  travel: Travel;
  moment: any;

  /* @ngInject */
  constructor(
    private $state: StateService,
    private dataService: DataService
  ) {
    this.moment = moment;
  }

  ngOnInit() {
    this.dataService.getTravel(true)
      .then((travel) => this.travel = travel);
  }

  goBack() {
    this.$state.go('dashboard');
  }
}
