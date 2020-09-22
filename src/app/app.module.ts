import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ReformComponent } from './pages/reform/reform.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCityComponent } from './admin/admin-city/admin-city.component';
import { AdminCityDistrictComponent } from './admin/admin-city-district/admin-city-district.component';
import { AdminClinicComponent } from './admin/admin-clinic/admin-clinic.component';
import { AdminSpecialityComponent } from './admin/admin-speciality/admin-speciality.component';
import { AdminDoctorsComponent } from './admin/admin-doctors/admin-doctors.component';
import { AdminAppointmentComponent } from './admin/admin-appointment/admin-appointment.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { OrderModule } from 'ngx-order-pipe';
import { SearchCityPipe } from './shared/pipes/search-city.pipe';
import { SearchDistrictPipe } from './shared/pipes/search-district.pipe';
import { SearchClinicPipe } from './shared/pipes/search-clinic.pipe';
import { SearchSpecialityPipe } from './shared/pipes/search-speciality.pipe';
import { SearchDoctorPipe } from './shared/pipes/search-doctor.pipe';
import { SortDatePipe } from './shared/pipes/sort-date.pipe';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { AppointmentComponent } from './pages/profile/appointment/appointment.component';
import { SearchComponent } from './components/search/search.component';
import { ClinicDoctorsComponent } from './pages/clinic-doctors/clinic-doctors.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './pages/profile/user/user.component';
import { AdminFeedbackComponent } from './admin/admin-feedback/admin-feedback.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ClinicComponent,
    AboutComponent,
    ContactsComponent,
    ReformComponent,
    AdminComponent,
    AdminCityComponent,
    AdminCityDistrictComponent,
    AdminClinicComponent,
    AdminSpecialityComponent,
    AdminDoctorsComponent,
    SearchCityPipe,
    SearchDistrictPipe,
    SearchClinicPipe,
    SearchSpecialityPipe,
    SearchDoctorPipe,
    DoctorComponent,
    DoctorDetailsComponent,
    AdminAppointmentComponent,
    SortDatePipe,
    LoginComponent,
    ProfileComponent,
    UpButtonComponent,
    AppointmentComponent,
    SearchComponent,
    ClinicDoctorsComponent,
    UserComponent,
    AdminFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule,
    OrderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    TimepickerModule.forRoot(),
    NgxPaginationModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
