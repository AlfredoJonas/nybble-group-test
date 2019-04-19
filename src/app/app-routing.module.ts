import { StateProvider } from '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelFormComponent } from './travel-form/travel-form.component';

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}
// Set all routes, with its relation component
const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'dashboard' },
  { name: 'dashboard', url: '/dashboard', component: TravelFormComponent },
  { name: 'detail', url: '/detail', component: TravelDetailComponent }
];

@NgModule({
  id: 'AppRoutingModule',
  imports: [
    'ui.router'
  ],
})
export class AppRoutingModule {
  // Configure the StateProvider with all routes
  static config($stateProvider: StateProvider) {
    'ngInject';
    routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
  }
}


function getNg1StateDeclaration(state: UiState) {
  if (state.component && typeof state.component !== 'string') {
    state.component = getTypeName(state.component);
  }
  return state;
}

