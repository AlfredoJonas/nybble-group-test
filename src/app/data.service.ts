import { IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { Travel } from './travel';

/* The IPromise and IQService are used for return a promise without a http call, 
but works excelent. If I want return to the Local Storage I use this method*/

@Injectable('dataService')
export class DataService {

  // This is the share information throug this service for the two components
  travel: Travel;
  remember: boolean;

  /* @ngInject */
  constructor(private $q: IQService) { }

  // Set the travel information and return a promise
  saveTravel(travel: Travel, remember: boolean): IPromise<Travel> {
    const deferred = this.$q.defer<Travel>();
    this.remember = remember;
    if (this.remember) {
      this.travel = travel;
      deferred.resolve(travel);
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  }

  // Clean the data travel
  clear(): Travel {
    this.travel = new Travel();
    return this.travel;
  }

  // Return the data travel, if isDetail is true, 
  // it say that the view that ejecute the call is DetailComponent
  // and not need validate with remember
  getTravel(isDetail): IPromise<Travel> {
    const deferred = this.$q.defer<Travel>();
    if (this.remember || isDetail) {
      deferred.resolve(this.travel);
    } else {
      deferred.resolve(this.clear());
    }
    return deferred.promise;
  }
}
