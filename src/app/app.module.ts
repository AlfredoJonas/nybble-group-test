import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HeaderComponent } from './header/header.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelFormComponent } from './travel-form/travel-form.component';

// Declare the components, providers and routing for this app
@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TravelDetailComponent,
    TravelFormComponent,
    HeaderComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
